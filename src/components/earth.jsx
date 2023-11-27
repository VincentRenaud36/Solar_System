import React, { useRef, useState, useEffect } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import EarthDayMap from "/src/textures/earth/8k_earth_daymap.jpg";
import EarthNormalMap from "/src/textures/earth/8k_earth_normal_map.jpg";
import EarthSpecularMap from "/src/textures/earth/8k_earth_specular_map.jpg";
import EarthCloudMap from "/src/textures/earth/8k_earth_clouds.jpg";
import { TextureLoader } from "three";
import { animateOrbitAndRotation } from './orbitAndRotation';
import {HoveredMesh} from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { earthDistance, earthOrbit, earthRotation, earthSize } from "./controls/size";


export function Earth(){
    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]);
    const earthRef = useRef();
    const cloudRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(earthRef, cloudRef, hoverRef, earthDistance, 5, earthOrbit, earthRotation);

    return (
     <group>
        <mesh
            ref={cloudRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => {}}
        >
            <sphereGeometry args={[earthSize + 0.005, 32, 32]}/>
            <meshStandardMaterial 
            map={cloudMap} 
            opacity={0.4} 
            depthWrite={true} 
            transparent={true} 
            side={THREE.DoubleSide}
            />
        </mesh>

        <mesh
            ref={earthRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => {}}
        >
            <sphereGeometry args={[earthSize, 32, 32]}/>
            <meshPhongMaterial
                specularMap={specularMap}
                map={colorMap}
                normalMap={normalMap}
                metalness={0.4}
                roughness={0.7}
                />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={earthSize}/>
    </group>
    )
}
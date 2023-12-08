import React, { useRef, useState, useContext } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  VenusTexture from "/src/textures/venus/8k_venus_surface.jpg"
import  VenusAtmosphere from "/src/textures/venus/4k_venus_atmosphere.jpg"
import { animateOrbitAndRotation } from '../components/controls/orbitAndRotation';
import * as THREE from "three";
import {HoveredMesh} from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { venusDistance, venusOrbit, venusRotation, venusSize } from "./controls/size";
import { useCameraFollow } from "./controls/useCameraFollow";
import { PlanetContext } from './../App';

export function Venus(){

    const [venusMap, cloudMap] = useLoader(TextureLoader, [VenusTexture, VenusAtmosphere]);
    const venusRef = useRef();
    const cloudRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(venusRef, cloudRef, hoverRef, venusDistance, 3, venusOrbit, venusRotation)
    const [target, setTarget] = useCameraFollow(venusSize);

    const { setPlanet } = useContext(PlanetContext);
    const handlePlanetClick = () => {
        setPlanet('venus');
    };
    return (
        <group>
            <mesh
            ref={cloudRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={(e) => {
                setTarget(e.object);
                handlePlanetClick();
            }}
            >
            <sphereGeometry args={[ venusSize + 0.005, 32, 32]}/>
            <meshStandardMaterial 
            map={cloudMap} 
            opacity={0.4} 
            depthWrite={true} 
            transparent={true} 
            side={THREE.DoubleSide}
            />
            </mesh>
        <mesh 
        ref={venusRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[venusSize, 32, 32]}/>
        <meshStandardMaterial
            map={venusMap}
            metalness={0.4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={venusSize}/>
        </group>
    )
}
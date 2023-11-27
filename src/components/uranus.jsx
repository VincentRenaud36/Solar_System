import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  UranusTexture from "/src/textures/uranus/2k_uranus.jpg";
import { animateOrbitAndRotation } from './orbitAndRotation';
import * as THREE from "three";
import { useCursorStyle } from "./controls/useCursorStyle";
import {HoveredMesh} from './controls/hoveredMesh';
import { uranusDistance, uranusOrbit, uranusRotation, uranusSize } from "./controls/size";

export function Uranus(){

    const [uranusMap] = useLoader(TextureLoader, [UranusTexture]);
    const uranusRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(uranusRef, null, hoverRef, uranusDistance, 35, uranusOrbit, uranusRotation)

    return (
        <group>
        <mesh 
        ref={uranusRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[uranusSize, 32, 32]}/>
        <meshPhongMaterial
            map={uranusMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={uranusSize}/>
        </group>
    )
}
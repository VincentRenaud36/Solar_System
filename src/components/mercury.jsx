import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  MercuryTexture from "/src/textures/mercury/8k_mercury.jpg"
import { animateOrbitAndRotation } from './orbitAndRotation';
import * as THREE from "three";
import { useCursorStyle } from "./controls/useCursorStyle";
import {HoveredMesh} from './controls/hoveredMesh';
import { mercuryDistance, mercuryOrbit, mercuryRotation, mercurySize } from "./controls/size";

export function Mercury(){

    const [mercuryMap] = useLoader(TextureLoader, [MercuryTexture]);
    const mercuryRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(mercuryRef, null, hoverRef, mercuryDistance, 1, mercuryOrbit, mercuryRotation);


    return (
        <group>
        <mesh 
        ref={mercuryRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[mercurySize, 32, 32]}/>
        <meshStandardMaterial
            map={mercuryMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={mercurySize}/>
        </group>
    )
}
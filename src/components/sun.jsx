import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  SunTexture from "/src/textures/sun/8k_sun.jpg";
import * as THREE from "three";
import { useCursorStyle } from "./controls/useCursorStyle";
import {HoveredMesh} from './controls/hoveredMesh';
import { sunSize } from "./controls/size";


export function Sun(){
    const [sunMap] = useLoader(TextureLoader, [SunTexture]);
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);

    return (
        <group>
            <mesh
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
            <sphereGeometry args={[sunSize, 32, 32]}/>
            <meshPhongMaterial 
            map={sunMap}
            metalness={4}
            />
            </mesh>
            <HoveredMesh hovered={hovered} size={sunSize}/>
        </group>
        
        
    )
}
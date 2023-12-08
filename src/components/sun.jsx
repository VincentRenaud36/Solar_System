import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  SunTexture from "/src/textures/sun/8k_sun.jpg";
import * as THREE from "three";
import { useCursorStyle } from "./controls/useCursorStyle";
import {HoveredMesh} from './controls/hoveredMesh';
import { sunSize } from "./controls/size";
import { useCameraFollow } from "./controls/useCameraFollow";

export function Sun(){
    const [sunMap] = useLoader(TextureLoader, [SunTexture]);
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    const { setTarget } = useCameraFollow(sunSize);

    return (
        <group>
            <mesh
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={(e) => {
                    setTarget(e.object);
                }}
            >
            <sphereGeometry args={[sunSize, 32, 32]}/>
            <meshLambertMaterial color="#ffffff" 
            map={sunMap}
            metalness={15}
            shininess={100}
            specular={0xFFFFFF}
            />
            </mesh>
            <HoveredMesh hovered={hovered} size={sunSize}/>
        </group>
     
    )
}
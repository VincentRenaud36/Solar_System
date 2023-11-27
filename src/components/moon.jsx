import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  MoonTexture from "/src/textures/moon/8k_moon.jpg"
import { animateOrbitAndRotation } from './orbitAndRotation';
import * as THREE from "three";
import { HoveredMesh } from './hoveredMesh';


export function Moon(){
//Faire en sorte que la lune tourne autour de la terre et non pas autour du soleil
    const [moonMap] = useLoader(TextureLoader, [MoonTexture]);
    const [hovered, setHover] = useState(false);
    const moonRef = useRef();
    const hoverRef = useRef();
    // animateOrbitAndRotation(moonRef, null, hoverRef, 4)

    return (
        <group>
        <mesh 
        ref={moonRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[0.2, 32, 32]}/>
        <meshStandardMaterial
            map={moonMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} />
        </group>
    )
}
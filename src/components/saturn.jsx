import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  SaturnTexture from "/src/textures/saturn/8k_saturn.jpg";
import { animateOrbitAndRotation } from './orbitAndRotation';
import { HoveredMesh } from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { saturnDistance, saturnOrbit, saturnRotation, saturnSize } from "./controls/size";

export function Saturn(){

    const [saturnMap] = useLoader(TextureLoader, [SaturnTexture]);
    const saturnRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(saturnRef, null, hoverRef, saturnDistance, 38, saturnOrbit, saturnRotation)

    return (
        <group>
        <mesh 
        ref={saturnRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[saturnSize, 32, 32]}/>
        <meshPhongMaterial
            map={saturnMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={saturnSize}/>
        </group>
    )
}
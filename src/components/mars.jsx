import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  MarsTexture from "/src/textures/mars/8k_mars.jpg";
import { animateOrbitAndRotation } from './orbitAndRotation';
import { HoveredMesh } from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { marsDistance, marsOrbit, marsRotation, marsSize } from "./controls/size";

export function Mars(){

    const [marsMap] = useLoader(TextureLoader, [MarsTexture]);
    const marsRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(marsRef, null, hoverRef, marsDistance, 2, marsOrbit, marsRotation);

    return (
        <group>
        <mesh 
        ref={marsRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[marsSize, 32, 32]}/>
        <meshPhongMaterial
            map={marsMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={marsSize}/>
        </group>
    )
}
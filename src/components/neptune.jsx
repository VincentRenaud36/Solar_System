import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  NeptuneTexture from "/src/textures/neptune/2k_neptune.jpg";
import { animateOrbitAndRotation } from './orbitAndRotation';
import { HoveredMesh } from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { neptuneDistance, neptuneOrbit, neptuneRotation, neptuneSize } from "./controls/size";

export function Neptune(){

    const [neptuneMap] = useLoader(TextureLoader, [NeptuneTexture]);
    const neptuneRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(neptuneRef, null, hoverRef, neptuneDistance, 12, neptuneOrbit, neptuneRotation)

    return (
        <group>
        <mesh 
        ref={neptuneRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <sphereGeometry args={[neptuneSize, 32, 32]}/>
        <meshPhongMaterial
            map={neptuneMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={neptuneSize}/>
        </group>
    )
}
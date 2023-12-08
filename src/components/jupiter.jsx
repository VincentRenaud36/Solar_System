import React, { useRef, useState, useContext } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  JupiterTexture from "/src/textures/jupiter/8k_jupiter.jpg";
import { animateOrbitAndRotation } from '../components/controls/orbitAndRotation';
import { HoveredMesh } from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { jupiterDistance, jupiterOrbit, jupiterRotation, jupiterSize } from "./controls/size";
import { useCameraFollow } from "./controls/useCameraFollow";
import { PlanetContext } from './../App';

export function Jupiter(){

    const [jupiterMap] = useLoader(TextureLoader, [JupiterTexture]);
    const jupiterRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(jupiterRef, null, hoverRef, jupiterDistance, 7, jupiterOrbit, jupiterRotation)
    const [target, setTarget] = useCameraFollow(jupiterSize);

    const { setPlanet } = useContext(PlanetContext);
    const handlePlanetClick = () => {
        setPlanet('jupiter');
    };
    return (
        <group>
        <mesh 
        ref={jupiterRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={(e) => {
            setTarget(e.object);
            handlePlanetClick();
        }}
        >
        <sphereGeometry args={[jupiterSize, 32, 32]}/>
        <meshPhongMaterial
            map={jupiterMap}
            metalness={4}
            />
        </mesh>
        <HoveredMesh hovered={hovered} hoverRef={hoverRef} size={jupiterSize}/>
        </group>
    )
}
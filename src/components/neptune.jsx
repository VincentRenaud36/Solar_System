import React, { useRef, useState, useContext } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  NeptuneTexture from "/src/textures/neptune/2k_neptune.jpg";
import { animateOrbitAndRotation } from '../components/controls/orbitAndRotation';
import { HoveredMesh } from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { neptuneDistance, neptuneOrbit, neptuneRotation, neptuneSize } from "./controls/size";
import { useCameraFollow } from "./controls/useCameraFollow";
import { PlanetContext } from './../App';

export function Neptune(){

    const [neptuneMap] = useLoader(TextureLoader, [NeptuneTexture]);
    const neptuneRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(neptuneRef, null, hoverRef, neptuneDistance, 12, neptuneOrbit, neptuneRotation)
    const [target, setTarget] = useCameraFollow(neptuneSize);

    const { setPlanet } = useContext(PlanetContext);
    const handlePlanetClick = () => {
        setPlanet('neptune');
    };
    return (
        <group>
        <mesh 
        ref={neptuneRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={(e) => {
            setTarget(e.object);
            handlePlanetClick();
        }}
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
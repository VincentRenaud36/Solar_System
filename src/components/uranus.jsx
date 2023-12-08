import React, { useRef, useState, useContext } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  UranusTexture from "/src/textures/uranus/2k_uranus.jpg";
import { animateOrbitAndRotation } from '../components/controls/orbitAndRotation';
import * as THREE from "three";
import { useCursorStyle } from "./controls/useCursorStyle";
import {HoveredMesh} from './controls/hoveredMesh';
import { uranusDistance, uranusOrbit, uranusRotation, uranusSize } from "./controls/size";
import { useCameraFollow } from "./controls/useCameraFollow";
import { PlanetContext } from './../App';

export function Uranus(){

    const [uranusMap] = useLoader(TextureLoader, [UranusTexture]);
    const uranusRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(uranusRef, null, hoverRef, uranusDistance, 35, uranusOrbit, uranusRotation)
    const [target, setTarget] = useCameraFollow(uranusSize);

    const { setPlanet } = useContext(PlanetContext);
    const handlePlanetClick = () => {
        setPlanet('uranus');
    };

    return (
        <group>
        <mesh 
        ref={uranusRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={(e) => {
            setTarget(e.object);
            handlePlanetClick();
        }}
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
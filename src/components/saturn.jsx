import React, { useRef, useState, useContext } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import  SaturnTexture from "/src/textures/saturn/8k_saturn.jpg";
import  ringTexture from "/src/textures/saturn/8k_saturn_ring_alpha.png";
import { animateOrbitAndRotation } from '../components/controls/orbitAndRotation';
import { HoveredMesh } from './controls/hoveredMesh';
import { useCursorStyle } from "./controls/useCursorStyle";
import { saturnDistance, saturnOrbit, saturnRotation, saturnSize } from "./controls/size";
import { useCameraFollow } from "./controls/useCameraFollow";
import { PlanetContext } from './../App';

export function Saturn(){

    const [saturnMap, ringMap] = useLoader(TextureLoader, [SaturnTexture, ringTexture]);
    const saturnRef = useRef();
    const hoverRef = useRef();
    const [hovered, setHover] = useState(false);
    useCursorStyle(hovered);
    animateOrbitAndRotation(saturnRef, null, hoverRef, saturnDistance, 38, saturnOrbit, saturnRotation)
    const [target, setTarget] = useCameraFollow(saturnSize);

    const { setPlanet } = useContext(PlanetContext);
    const handlePlanetClick = () => {
        setPlanet('saturne');
    };

    return (
        <group>
        <mesh 
        ref={saturnRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={(e) => {
            setTarget(e.object);
            handlePlanetClick();
        }}
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

// rotation={{ x: Math.PI / 2 }}
{/* <mesh  position={saturnRef.current ? saturnRef.current.position : [0, 0, 0]}  >
            <ringGeometry args={[1, 6, 32]}/>
            <meshBasicMaterial
                map={ringMap}
                    // color={'yellow'}
                side={THREE.DoubleSide}
                    // opacity={2}
                    transparent={false}
                />
            </mesh> */}
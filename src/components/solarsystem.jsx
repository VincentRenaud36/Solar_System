import React, {useState, useEffect, useContext, useCallback} from "react";
import { OrbitControls, Stars, useCamera } from "@react-three/drei";
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Sun } from './sun';
import { Mercury } from "./mercury";
import { Venus } from "./venus";
import { Earth } from './earth';
import { Mars } from "./mars";
import { Jupiter } from "./jupiter";
import { Saturn } from "./saturn";
import { Neptune } from "./neptune";
import { Uranus } from "./uranus";
import { PlanetContext } from './../App';
import { useCameraFollow } from "./controls/useCameraFollow";
import { sunSize } from "./controls/size";

export function SolarSytem(){
    const { camera } = useThree();
    return (
        <>
            <ambientLight intensity={0.5} />
        <pointLight color="#f7f3e0" position={[0, 0, 0]} intensity={300} distance={3000}/>
            {/* <hemisphereLight skyColor={"#ffffff"} groundColor={"#ffffff"} intensity={0.25} />
    <pointLight position={[0, 0, 0]} intensity={500} distance={sunSize + 15} /> */}
            <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                enableRotate={true} 
                zoomSpeed={0.6} 
                panSpeed={0.6} 
                rotateSpeed={0.6}
            />
           
            <Sun/>
            <Mercury/>
            <Venus/>
            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
        </>
        
    );
};
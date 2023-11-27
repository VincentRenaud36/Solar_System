import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useThree } from '@react-three/fiber';
import { Sun } from './sun';
import { Mercury } from "./mercury";
import { Venus } from "./venus";
import { Earth } from './earth';
import { Mars } from "./mars";
import { Jupiter } from "./jupiter";
import { Saturn } from "./saturn";
import { Neptune } from "./neptune";
import { Uranus } from "./uranus";
// import { configureCameraForPlanet } from './cameraControl';


export function SolarSytem(){
//     { const { size } = useThree(); // hook de react-three-fiber
//   console.log("Taille du rendu (canvas) :", size); }
    
    return (
        <>
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true}/>
            <ambientLight />
        {/* <pointLight color="#f7f3e0" position={[2, 0, 2]} intensity={25}/> */}
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
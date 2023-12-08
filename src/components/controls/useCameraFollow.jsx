import { extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useState, useEffect, useRef } from 'react';
import * as THREE from "three";

export function useCameraFollow(planetScale) {
    const [target, setTarget] = useState(null);
    const { camera } = useThree();

    useFrame(() => {
        if (target) {
            let distance = 5 * planetScale; // Adjust the distance based on the scale
            let newPosition = target.position.clone().add(new THREE.Vector3(0, 0, distance)); // Add 10 to z position
            camera.position.lerp(newPosition, 0.05);
            camera.lookAt(target.position);
        }
    });
    return [target, setTarget];
}
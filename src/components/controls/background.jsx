import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Sphere } from '@react-three/drei';
import * as THREE from "three";
export function Background() {
    const texture = useLoader(TextureLoader, '/src/textures/background/8k_stars_milky_way.jpg');

    return (
        <Sphere args={[500, 32, 32]} position={[0, 0, 0]}>
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </Sphere>
    );
}
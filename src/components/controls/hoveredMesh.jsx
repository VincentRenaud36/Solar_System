import React from 'react';
import * as THREE from 'three';

export function HoveredMesh({ hovered, hoverRef, size }) {
    return (
        hovered && (
            <mesh scale={[1, 1, 1]} ref={hoverRef}>
                <sphereGeometry args={[size + 0.02, 32, 32]} />
                <meshBasicMaterial 
                    color="#becfff" 
                    side={THREE.DoubleSide} 
                    opacity={0.25}
                    transparent={true}
                />
            </mesh>
        )
    );
}
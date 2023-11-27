import { useFrame } from "@react-three/fiber";
// Faire une variable pour la vitesse de rotation de la planete autour du soleil, en passant un nouveau paramètre à la fonction animateOrbitAndRotation
export function animateOrbitAndRotation(firstRef = null , secondRef = null , hoverRef =  null, distanceFromSun = 0, offset = 0, speed = 0.2, rotationSpeed = 0) {
    useFrame(({ clock }) => {
        const elaspedTime = clock.getElapsedTime();
        //orbit rotation
        if (firstRef && firstRef.current) {
            firstRef.current.position.x = Math.sin(elaspedTime * speed + offset) * distanceFromSun; //vitesse de rotation de la planete autour du soleil
            firstRef.current.position.z = Math.cos(elaspedTime * speed + offset) * distanceFromSun;
            //axis rotation
            firstRef.current.rotation.y = elaspedTime / (rotationSpeed * 10); //vitesse de rotation de la planete sur elle-même
        }

        if (secondRef && secondRef.current) {
            secondRef.current.position.x = Math.sin(elaspedTime * speed + offset) * distanceFromSun;
            secondRef.current.position.z = Math.cos(elaspedTime * speed + offset) * distanceFromSun;
            //axis rotation
            secondRef.current.rotation.y = elaspedTime / (rotationSpeed * 10);
        }

        if (hoverRef && hoverRef.current) {
            hoverRef.current.position.x = Math.sin(elaspedTime * speed + offset) * distanceFromSun;
            hoverRef.current.position.z = Math.cos(elaspedTime * speed + offset) * distanceFromSun;
        }
    });
}
// import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// extend({ OrbitControls });

// export function CameraControls(){
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   useFrame((state) => {
//     camera.position.x += (state.mouse.x * 0.01 - camera.position.x) * 0.05;
//     camera.position.y += (-state.mouse.y * 0.01 - camera.position.y) * 0.05;
//     camera.lookAt(state.scene.position);
//   });

//   return <orbitControls args={[camera, domElement]} />;
// };
// const updateDivPosition = () => {
    //     const earthMesh = earthRef.current;
    //     const root = document.getElementById("root");
    
    //     if (earthMesh) {
    //       const screenPosition = earthMesh.position.clone();
    //       screenPosition.project(earthMesh.getObjectByName("camera"));
    
    //       const x = ((screenPosition.x + 1) / 2) * window.innerWidth;
    //       const y = ((-screenPosition.y + 1) / 2) * window.innerHeight;
    
    //       root.style.position = "absolute";
    //       root.style.left = x + "px";
    //       root.style.top = y + "px";
    //     }
    
    //     // Request the next animation frame
    //     requestAnimationFrame(updateDivPosition);
    //   };
    
    //   // Initial call to start updating the position
    //   updateDivPosition();
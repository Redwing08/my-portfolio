import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ModelViewer = () => {
  const mountRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    // Renderer (transparent background ✅)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // transparent instead of black
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.autoRotate = false;

    // Lights (bright)
    const ambientLight = new THREE.AmbientLight(0xffffff, 4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    scene.add(hemiLight);

    // Loader ✅ (you missed this line before)
    const loader = new GLTFLoader();

    // Load model
    loader.load(
      import.meta.env.BASE_URL + "BreathalizerKeys.glb",
      (gltf) => {
        if (loadedRef.current) return;
        loadedRef.current = true;

        const model = gltf.scene;
        scene.add(model);

        // Compute bounding box
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxAxis = Math.max(size.x, size.y, size.z);

        // ✅ Make model bigger (increase multiplier)
        const scale = 8 / maxAxis; // increase this number if still small
        model.scale.setScalar(scale);

        // Center model
        box.setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Position camera closer so model looks bigger
        camera.position.set(0, 0, maxAxis * 1.5); // smaller multiplier = zoom closer
        camera.lookAt(0, 0, 0);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Set a fixed height so it’s visible
  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

export default ModelViewer;

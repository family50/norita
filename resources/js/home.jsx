 import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Home() {
  const canvasRef = useRef(null); // ⬅️ هنمسك الـ div اللي هنركب فيه الكانفاس

  useEffect(() => {
    const container = canvasRef.current;

    // إعداد المشهد
    const scene = new THREE.Scene();

    // إعداد الكاميرا
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    // إعداد الريندر
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // الإضاءة
    const ambient = new THREE.AmbientLight(0xf2f2f2, 1.0);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xf2f2f2, 1.5);
    sun.position.set(0, 0, 1);
    scene.add(sun);

    // تحميل الموديل
    let model;
    const loader = new GLTFLoader();
    loader.load(
      "/home-images/Untitled.glb",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        resizeModel();

        window.addEventListener("resize", resizeModel);
      },
      undefined,
      (error) => {
        console.error("حصل خطأ في تحميل الموديل:", error);
      }
    );

    // دالة للتحكم في الحجم والمكان حسب عرض الشاشة
    function resizeModel() {
      if (!model) return;

      const screenWidth = window.innerWidth;

      if (screenWidth <= 59) {
        model.scale.set(0.4, 0.4, 0.4);
        model.position.set(-1.5, 0.2, 0);
      
      }else if (screenWidth <= 399) {
         model.scale.set(0.18, 0.18, 0.18)
         model.position.set(-1.9, 1, 0);
          model.rotation.set(0, 0, -0.01);
        
      }
      else if (screenWidth <= 403) {
         model.scale.set(0.22, 0.22, 0.22)
         model.position.set(-1.9, 0.79, 0);
          model.rotation.set(0, 0, -0.008);
        
      }
      else if (screenWidth <= 414) {
         model.scale.set(0.25, 0.25, 0.25)
         model.position.set(-1.85, 0.52, 0);
        
      }
      else if (screenWidth <= 442) {
         model.scale.set(0.26, 0.26, 0.26)
         model.position.set(-1.7, 0.46, 0);
        
      }
      else if (screenWidth <= 447) {
         model.scale.set(0.26, 0.26, 0.26)
         model.position.set(-1.7, 0.39, 0);
        
      }
      
      else if (screenWidth <= 478) {
         model.scale.set(0.28, 0.28, 0.28)
         model.position.set(-1.6, 0.3, 0);
        
      }
      
      else if (screenWidth <= 523) {
         model.scale.set(0.31, 0.31, 0.31)
         model.position.set(-1.5, 0.2, 0);
        
      }
      
      else if (screenWidth <= 601) {
         model.scale.set(0.34, 0.34, 0.34)
         model.position.set(-1.2, 0.2, 0);
        
      }
      else if (screenWidth <= 721) {
         model.scale.set(0.39, 0.39, 0.39)
        model.position.set(-1, -0.3, 0);
        
      }else if (screenWidth <= 805) {
        model.rotation.set(0, 0, 0);
         model.scale.set(0.45, 0.45, 0.45)
      }
      else if (screenWidth <= 855) {
        model.scale.set(0.48, 0.48, 0.48)
      }
      
      else if (screenWidth <= 888) {
        model.scale.set(0.50, 0.50, 0.50)
        model.position.set(-0.5, -0.4, 0);
      }
      
      else if (screenWidth <= 950) {
        model.scale.set(0.52, 0.52, 0.52)
        
      }
      
      
      else if (screenWidth <= 1020) {
         model.scale.set(0.56, 0.56, 0.56);
         
        
      }
      
      else if (screenWidth <= 1082) {
        model.scale.set(0.59, 0.59, 0.59);
         
      }
      else if (screenWidth <= 1205) {
         model.scale.set(0.63, 0.63, 0.63);
      }
      
      else if (screenWidth <= 1228) {
        model.scale.set(0.65, 0.65, 0.65);
      }
      
      else if (screenWidth <= 1325) {
        model.scale.set(0.67, 0.67, 0.67);
        model.position.set(-0.25, -0.5, 0);
      } else {
        model.scale.set(0.69, 0.69, 0.69);
        model.position.set(0.10, -0.5, 0);
        model.rotation.set(-0.1, -0.2, 0.1);
      }
    }

    // حلقة التكرار
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // تنظيف عند إزالة المكون
    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener("resize", resizeModel);
    };
  }, []);

 return (
  <div  className="home">
    {/* القسم اليسار */}
    <div id="lift">

      <div id="norita">
      <div>
        <h1>Norita — All Your Office Supplies in One Place</h1>
      </div>
      <div className="text">
        <p>From daily essentials to the latest school supplies.</p>
        <p>Shop with ease and get it delivered to your doorstep.</p>
      </div>  
      </div>
      <div id="b">
      <div>
        <button className="shop-btn">Shop Now</button>
      </div>
      </div>
    </div>

    {/* القسم اليمين (الموديل 3D) */}
    <div id="right">
      <div
        id="canvas"
        ref={canvasRef}
       
        
       
      ></div>
    </div>
  </div>
);
}

export default Home;


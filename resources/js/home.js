




document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.header-right .icon-btn');
    const navLinks = document.querySelectorAll('.header-center .nav-link');
    const langIcon = document.querySelector('.header-right .fa-language').parentElement; // أيقونة الترجمة

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            // لو الأيقونة هي الترجمة (toggle التفعيل)
            if (icon === langIcon) {
                if (icon.classList.contains('active')) {
                    // لو مفعلة مسبقاً، الغي التفعيل
                    icon.classList.remove('active');
                } else {
                    // لو مش مفعلة، فعّلها
                    icon.classList.add('active');
                }
                // روابط الوسط تظل كما هي (لا نمسح تفعيلها)
            } else {
                // أي أيقونة غير الترجمة تفعلها وتمسح تفعيل الروابط
                icons.forEach(i => i.classList.remove('active'));
                icon.classList.add('active');
                navLinks.forEach(link => link.classList.remove('active'));
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            // إزالة التفعيل من كل الروابط وتفعيل الرابط المضغوط
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // إزالة التفعيل من كل الأيقونات في اليمين (حتى الترجمة)
            icons.forEach(icon => icon.classList.remove('active'));
        });
    });
});





import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

// الكونتينر اللي هنحط فيه الكانفاس
const container = document.getElementById("canvas");

const scene = new THREE.Scene();

// الريندر
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// الكاميرا
const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

// إضاءة
const ambient = new THREE.AmbientLight(0xf2f2f2, 1.0);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xf2f2f2, 1.5);
sun.position.set(0, 0, 1);
scene.add(sun);



// 🟣 تحميل الموديل من فولدر public/home-images
const loader = new GLTFLoader();
loader.load(
  '/home-images/Untitled.glb',
  function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.69, 0.69, 0.69);   // تكبير/تصغير
    model.position.set(0, -0.5, 0); // مكانه في المشهد
    model.rotation.set(-0.1, -0.2, 0.1);
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error('حصل خطأ في تحميل الموديل:', error);
  }
);

// Loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();






 // ⬇️ أول جزء خاص بالـ DOM (الأيقونات والروابط)

document.addEventListener('DOMContentLoaded', () => { // تشغيل الكود بعد تحميل محتوى الصفحة
    const icons = document.querySelectorAll('.header-right .icon-btn'); // يجيب كل الأيقونات في الجزء اليمين
    const navLinks = document.querySelectorAll('.header-center .nav-link'); // يجيب كل الروابط في القائمة الوسطى
    const langIcon = document.querySelector('.header-right .fa-language').parentElement; // يحدد أيقونة الترجمة

    icons.forEach(icon => { // يلف على كل الأيقونات
        icon.addEventListener('click', () => { // يضيف حدث "كليك" لكل أيقونة
            // لو الأيقونة هي أيقونة الترجمة
            if (icon === langIcon) { 
                if (icon.classList.contains('active')) { 
                    icon.classList.remove('active'); // لو مفعلة يشيل التفعيل
                } else { 
                    icon.classList.add('active'); // لو مش مفعلة يفعّلها
                }
                // ما يغيرش في الروابط الوسطى
            } else {
                // لو أيقونة غير الترجمة: يوقف كل الأيقونات ويفعّل دي بس
                icons.forEach(i => i.classList.remove('active')); 
                icon.classList.add('active'); 
                navLinks.forEach(link => link.classList.remove('active')); // يشيل التفعيل من الروابط الوسطى
            }
        });
    });

    navLinks.forEach(link => { // يلف على كل روابط القائمة
        link.addEventListener('click', e => { // يضيف حدث "كليك" لكل رابط
            e.preventDefault(); // يمنع الانتقال للرابط
            navLinks.forEach(l => l.classList.remove('active')); // يشيل التفعيل من كل الروابط
            link.classList.add('active'); // يفعّل الرابط اللي اضغط عليه

            icons.forEach(icon => icon.classList.remove('active')); // يشيل التفعيل من كل الأيقونات
        });
    });
});




// ⬇️ جزء خاص بـ THREE.js لعرض الموديل 3D

import * as THREE from 'three'; // استدعاء مكتبة THREE.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // استدعاء محمل الموديلات GLB/GLTF
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'; // استدعاء الكنترول (مش مستخدم هنا)

// يحدد العنصر اللي هنحط فيه الكانفاس
const container = document.getElementById("canvas"); 

const scene = new THREE.Scene(); // إنشاء المشهد

// إعداد الريندر (العرض) مع شفافية وجودة عالية
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
renderer.setSize(container.clientWidth, container.clientHeight); // يضبط الحجم على حجم الكونتينر
container.appendChild(renderer.domElement); // يضيف الكانفاس جوه الصفحة

// إنشاء الكاميرا
const camera = new THREE.PerspectiveCamera( 
  45, // زاوية الرؤية
  container.clientWidth / container.clientHeight, // نسبة العرض للطول
  0.1, // أقل مسافة رؤية
  1000 // أكبر مسافة رؤية
); 
camera.position.set(0, 2, 5); // يحدد مكان الكاميرا
camera.lookAt(0, 0, 0); // يخليها تبص على مركز المشهد

// إضاءة خفيفة عامة
const ambient = new THREE.AmbientLight(0xf2f2f2, 1.0); 
scene.add(ambient); 

// إضاءة موجهة (زي الشمس)
const sun = new THREE.DirectionalLight(0xf2f2f2, 1.5); 
sun.position.set(0, 0, 1); 
scene.add(sun); 




// تحميل الموديل من فولدر public/home-images
let model;
const loader = new GLTFLoader(); 
loader.load( 
  '/home-images/Untitled.glb', // مسار الموديل
  function (gltf)  { // لو اتحمل بنجاح
     model = gltf.scene; // نخزن الموديل في المتغير العام
    scene.add(model);   // نضيفه للمشهد

    resizeModel(); // أول مرة نستدعي الدالة عشان تحدد الحجم
    window.addEventListener('resize', resizeModel); // مع كل تغيير لحجم الشاشة
  }, 

  undefined, 
  function (error) { // لو حصل خطأ
    console.error('حصل خطأ في تحميل الموديل:', error); 
  } 
);
// دالة للتحكم في الحجم حسب عرض الشاشة
function resizeModel() {
  if (!model) return; // لو الموديل لسه متحملش

  const screenWidth = window.innerWidth; // نجيب عرض الشاشة الحالي

  if (screenWidth <= 655) {
    model.scale.set(0.4, 0.4, 0.4);

  } 
   
 
  else if (screenWidth <= 1114) {
    model.scale.set(0.52, 0.52, 0.52);
  }


  else if (screenWidth <= 1136) {
    model.scale.set(0.52, 0.52, 0.52);
  }

  else if (screenWidth <= 1228) {
    model.scale.set(0.52, 0.52, 0.52);
    model.position.set(0, -0.4, 0); // يحدد مكانه 
  } 

  else if (screenWidth <= 1239) {
    model.scale.set(0.57, 0.57, 0.57);
    model.position.set(0, -0.4, 0); // يحدد مكانه 
  } 

  else if (screenWidth <= 1251) {
    model.scale.set(0.59, 0.59, 0.59);
    model.position.set(0, -0.4, 0); // يحدد مكانه 
  } 
  
  else if (screenWidth <= 1325) {
    model.scale.set(0.61, 0.61, 0.61);
    model.position.set(0, -0.4, 0); // يحدد مكانه 
  } 
  
  
  else {
    model.scale.set(0.66, 0.66, 0.66);
    model.position.set(0, -0.5, 0); // يحدد مكانه 
    model.rotation.set(-0.1, -0.2, 0.1); // يحدد زاويته
  }
}

// حلقة التكرار (بتحدث العرض كل فريم)
function animate() { 
  requestAnimationFrame(animate); // يطلب تكرار الرسمة
  renderer.render(scene, camera); // يرسم المشهد بالكاميرا
} 
animate(); // تشغيل الحلقة

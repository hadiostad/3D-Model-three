var scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 2.5;
camera.position.z = 2;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color(0xff00ff), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color(0xff00ff), 1.0);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xff00ff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);



   
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('assets/');
mtlLoader.setPath('assets/');
mtlLoader.load('TeeUnrigged.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('assets/');
    objLoader.load('TeeUnrigged.obj', function (object) {

        scene.add(object);
      

    });

});



var animate = function () {
    requestAnimationFrame(animate);


    controls.update();

    renderer.render(scene, camera);
};

animate();
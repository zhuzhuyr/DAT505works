var container, stats;
var camera, scene, raycaster, renderer;

init();
render();


function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.y+=300;
    camera.position.z+=1500;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}
/////////////////////////
function mx1(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("mx1.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("mx2.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////////
function mx2(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("mx2.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("mx2.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////////
function mx3(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("mx3.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("mx3.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
  document.getElementById("mx1").addEventListener("click",mx1);
  document.getElementById("mx2").addEventListener("click",mx2);
  document.getElementById("mx3").addEventListener("click",mx3);
}

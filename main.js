import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const orbit = new OrbitControls(camera, renderer.domElement)
// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);
camera.position.set(60, 100, 45);
camera.lookAt(0, 0, 0);
orbit.update();



const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
// Create a grid of objects based on the layout
const gridSize = 1;
const rows = 28;
const cols = 28;



function createPacDot() {
    const geometry = new THREE.SphereGeometry(0.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 'yellow' });
    return new THREE.Mesh(geometry, material);
}

function createWall() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 'blue' });
    return new THREE.Mesh(geometry, material);
}

function createGhostLair() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 'pink' });
    return new THREE.Mesh(geometry, material);
}

function createPowerPellet() {
    const geometry = new THREE.SphereGeometry(0.4, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 'Green' });
    return new THREE.Mesh(geometry, material);
}

function createEmpty() {
    return null; // No need to create a mesh for empty spaces
}

function createObject(type) {
    switch (type) {
        case 0: return createPacDot();
        case 1: return createWall();
        case 2: return createGhostLair();
        case 3: return createPowerPellet();
        case 4: return createEmpty();
        default: return createEmpty();
    }
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const type = layout[i * cols + j];
        const obj = createObject(type);
        if (obj) {
            obj.position.set(j * gridSize - cols / 2, 0, i * gridSize - rows / 2);
            scene.add(obj);
        }
    }
}

// Add a plane for the board
const planeGeometry = new THREE.PlaneGeometry(cols, rows);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 'lightgrey', side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
scene.add(plane);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();






// function addPacDots(rows, cols, spacing) {
//     const pacDotGeometry = new THREE.CircleGeometry(0.2, 32); // Create a small circle geometry
//     const pacDotMaterial = new THREE.MeshBasicMaterial({ color: 'yellow' }); // Material for the Pac-Dots
     
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             const pacDot = new THREE.Mesh(pacDotGeometry, pacDotMaterial);
//             pacDot.position.set(i * spacing - (rows * spacing) / 2, 0.2, j * spacing - (cols * spacing) / 2);
//             pacDot.rotation.x = -0.5 * Math.PI; // Rotate to lay flat on the plane
//             scene.add(pacDot);
//         }
//     }
// }

// // Grid Parameters
// const rows = 10;
// const cols = 10;
// const spacing = 2; // Distance between Pac-Dots

// addPacDots(rows, cols, spacing);






// const boxGeometry = new THREE.BoxGeometry(0.6 ,1.1 , 20);
// const boxMaterial = new THREE.MeshBasicMaterial({ color: "yellow" })
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// box.position.set(9.7,0.6,0);
// scene.add(box);



// const boxGeometry3 = new THREE.BoxGeometry(20 ,1.1 ,0.6);
// const boxMaterial3 = new THREE.MeshBasicMaterial({ color: "yellow" })
// const box3 = new THREE.Mesh(boxGeometry3, boxMaterial3);
// box3.position.set(0,0.6,9.7);
// scene.add(box3);

// const boxGeometry4 = new THREE.BoxGeometry(20 ,1.1 ,0.6);
// const boxMaterial4 = new THREE.MeshBasicMaterial({ color: "yellow" })
// const box4 = new THREE.Mesh(boxGeometry4, boxMaterial4);
// box4.position.set(0,0.6,-9.7);
// scene.add(box4);



// const boxGeometry2 = new THREE.BoxGeometry(0.6 ,1.1 , 20);
// const boxMaterial2 = new THREE.MeshBasicMaterial({ color: "yellow" })
// const box2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
// box2.position.set(-9.7,0.6,0);
// scene.add(box2);

// const planeGeometry = new THREE.PlaneGeometry(20 , 20);
// const planeMaterial = new THREE.MeshBasicMaterial({
//     color: "lightblue",
//     side:THREE.DoubleSide
    

// })
// const plane = new THREE.Mesh(planeGeometry ,planeMaterial); 
// plane.rotation.x = 0.5 * Math.PI;
// scene.add(plane);
 
// // const gridHelper = new THREE.GridHelper();
// // scene.add(gridHelper);

// function animate() {
// //     box.rotation.x += 0.01;
// //     box.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// renderer.render(scene, camera);
// renderer.setAnimationLoop(animate);
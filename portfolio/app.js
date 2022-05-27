import './style.css'
import * as THREE from 'three';
import { Camera } from 'three';
const scene = new THREE.Scene();
const perspective = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
perspective.position.setZ(30);
renderer.render(scene, perspective);
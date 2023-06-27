import * as BABYLON from '@babylonjs/core';
import { FireProceduralTexture, MarbleProceduralTexture } from '@babylonjs/procedural-textures';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.clearColor = BABYLON.Color3.White();

  scene.createDefaultCamera(true, true, true);

  const plane = new BABYLON.MeshBuilder.CreatePlane();
  const planeMat = new BABYLON.StandardMaterial();
  plane.material = planeMat;

  const noiseTexture = new BABYLON.NoiseProceduralTexture('noiseTex', 256, scene);
  //planeMat.emissiveTexture = noiseTexture;
  planeMat.emissiveTexture = new BABYLON.Texture('/cat.jpg');

  noiseTexture.octaves = 4;
  noiseTexture.persistence = 1.1;
  noiseTexture.animationSpeedFactor = 1.5;

  noiseTexture.getAlphaFromRGB = true;
  planeMat.opacityTexture = noiseTexture;

  //const fireTexture = new FireProceduralTexture('fireTexture', 256, scene);
  //planeMat.emissiveTexture = fireTexture;
  //fireTexture.speed = new BABYLON.Vector2(0.5, 0.5);
  //fireTexture.fireColors = FireProceduralTexture.GreenFireColors;
  // fireTexture.fireColors = [
  //   new BABYLON.Color3(0, 1, 0),
  //   new BABYLON.Color3(0, 1, 1),
  //   new BABYLON.Color3(0, 1, 0),
  //   new BABYLON.Color3(0, 0, 1),
  //   new BABYLON.Color3(1, 1, 0),
  //   new BABYLON.Color3(1, 0, 1)
  // ];
  // planeMat.opacityTexture = fireTexture;

  // const marbleTexture = new MarbleProceduralTexture('marbleTexture', 512, scene);
  // planeMat.emissiveTexture = marbleTexture;
  // marbleTexture.jointColor = BABYLON.Color3.Blue();
  // marbleTexture.numberOfTilesHeight = 6;
  // marbleTexture.numberOfTilesWidth = 6;

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});

//Inspector.Show(scene, {});
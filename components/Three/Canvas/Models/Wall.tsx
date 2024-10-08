

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Pared: THREE.Mesh;
    Plane114: THREE.Mesh;
    Circle044: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Plane258: THREE.Mesh;
    Plane153: THREE.Mesh;
  };
  materials: {
    Posters: THREE.MeshStandardMaterial;
  };
};

export function Wall({ atlasMaterial }: AtlasMaterial): JSX.Element {
  const { nodes, materials } = useGLTF(
    "/models/Wall.glb"
  ) as GLTFResult;

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='Pared'
          castShadow
          receiveShadow
          geometry={nodes.Pared.geometry}
          material={atlasMaterial}
        />
        <mesh
          name='Plane114'
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={atlasMaterial}
          position={[44.29, 5.78, -14.88]}
        />
        <mesh
          name='Circle044'
          castShadow
          receiveShadow
          geometry={nodes.Circle044.geometry}
          material={atlasMaterial}
          position={[76.54, 5.03, 5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.22}
        />
        <mesh
          name='Cylinder002'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={atlasMaterial}
          position={[54.86, 12.47, -14.73]}
          scale={0.53}
        />
        <mesh
          name='Plane258'
          castShadow
          receiveShadow
          geometry={nodes.Plane258.geometry}
          material={atlasMaterial}
        />
        <mesh
          name='Plane153'
          castShadow
          receiveShadow
          geometry={nodes.Plane153.geometry}
          material={materials.Posters}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Wall.glb");

import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {proxy} from "valtio";
import {useSnapshot} from "valtio";


type GLTFResult = GLTF & {
    nodes: {
        shoe: THREE.Mesh
        shoe_1: THREE.Mesh
        shoe_2: THREE.Mesh
        shoe_3: THREE.Mesh
        shoe_4: THREE.Mesh
        shoe_5: THREE.Mesh
        shoe_6: THREE.Mesh
        shoe_7: THREE.Mesh
    }
    materials: {
        laces: THREE.MeshStandardMaterial
        mesh: THREE.MeshStandardMaterial
        caps: THREE.MeshStandardMaterial
        inner: THREE.MeshStandardMaterial
        sole: THREE.MeshStandardMaterial
        stripes: THREE.MeshStandardMaterial
        band: THREE.MeshStandardMaterial
        patch: THREE.MeshStandardMaterial
    }
}
let state: StateType =proxy({
    current:null,
    items:{
        laces: "#ff0000",
        mesh: "#ffffff",
        caps: "#ffffff",
        inner: "#ffffff",
        sole: "#000000",
        stripes: "#ffffff",
        band: "#ffffff",
        patch: "#ffffff"
    }

})
type StateType = {
    current: null | string,
    items:{
        laces: string,
        mesh: string,
        caps: string,
        inner: string,
        sole: string,
        stripes: string,
        band: string,
        patch: string
    }
}

export default function Shoes({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const snap  = useSnapshot(state)
    let [hovered, setHovered] = useState<null | string>(null)
    const { nodes, materials } = useGLTF('/shoe-draco.glb') as GLTFResult
    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            onPointerOver={(e)=>{e.stopPropagation, setHovered(e.object.name)}}
            onPointerOut={(e)=>{e.intersections.length === 0 && setHovered(null) }}
            onPointerDown={(e)=>{e.stopPropagation(); state.current = e.object.name }}
            onPointerMissed={(e)=>{state.current = null}}
        >
            <mesh name={'laces'} material-color={snap.items.laces}  geometry={nodes.shoe.geometry} material={materials.laces} />
            <mesh material-color={snap.items.mesh}  geometry={nodes.shoe_1.geometry} material={materials.mesh} />
            <mesh material-color={snap.items.caps} geometry={nodes.shoe_2.geometry} material={materials.caps} />
            <mesh material-color={snap.items.inner}  geometry={nodes.shoe_3.geometry} material={materials.inner} />
            <mesh material-color={snap.items.sole}  geometry={nodes.shoe_4.geometry} material={materials.sole} />
            <mesh material-color={snap.items.stripes}  geometry={nodes.shoe_5.geometry} material={materials.stripes} />
            <mesh material-color={snap.items.band}  geometry={nodes.shoe_6.geometry} material={materials.band} />
            <mesh material-color={snap.items.patch}  geometry={nodes.shoe_7.geometry} material={materials.patch} />
        </group>
    )
}


useGLTF.preload('/shoe-draco.glb')


import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { proxy,useSnapshot } from 'valtio'


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


type GLTFResult = GLTF & {
    nodes: {
        shoeshoe_leftpolySurface60polySurface49polySurface59: THREE.Mesh
        shoeshoe_leftpolySurface49polySurface59polySurface57: THREE.Mesh
        shoeshoe_leftpolySurface49polySurface59polySurface59: THREE.Mesh
        shoepolySurface65: THREE.Mesh
        shoegroup1polySurface22polySurface35shoe_left: THREE.Mesh
        shoeshoe_leftpolySurface49polySurface59polySurface55: THREE.Mesh
        shoeshoe_leftpolySurface49polySurface59polySurface56: THREE.Mesh
        shoeshoe_leftpolySurface7group1polySurface32: THREE.Mesh
        shoeshoe_leftpolySurface49polySurface59polySurface61: THREE.Mesh
        shoegroup1polySurface12polySurface34: THREE.Mesh
        shoeshoe_leftgroup1polySurface24polySurface36: THREE.Mesh
        shoeshoe_leftpolySurface7group1polySurface31: THREE.Mesh
        shoeshoe_leftgroup1polySurface13polySurface34: THREE.Mesh
    }
    materials: {
        initialShadingGroup: THREE.MeshStandardMaterial
    }
}

export default function Shoes({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/shoe05.glb') as GLTFResult
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[0.2,0.9,0]} position={[0, 0, 0]} scale={2}>
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface60polySurface49polySurface59.geometry}
                    material={nodes.shoeshoe_leftpolySurface60polySurface49polySurface59.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface49polySurface59polySurface57.geometry}
                     material={nodes.shoeshoe_leftpolySurface49polySurface59polySurface57.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface49polySurface59polySurface59.geometry}
                    material={nodes.shoeshoe_leftpolySurface49polySurface59polySurface59.material}
                />
                <mesh geometry={nodes.shoepolySurface65.geometry}
                      material={nodes.shoepolySurface65.material}
                />
                <mesh
                    geometry={nodes.shoegroup1polySurface22polySurface35shoe_left.geometry}
                    material={nodes.shoegroup1polySurface22polySurface35shoe_left.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface49polySurface59polySurface55.geometry}
                    material={nodes.shoeshoe_leftpolySurface49polySurface59polySurface55.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface49polySurface59polySurface56.geometry}
                    material={nodes.shoeshoe_leftpolySurface49polySurface59polySurface56.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface7group1polySurface32.geometry}
                    material={nodes.shoeshoe_leftpolySurface7group1polySurface32.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface49polySurface59polySurface61.geometry}
                    material={nodes.shoeshoe_leftpolySurface49polySurface59polySurface61.material}
                />
                <mesh
                    geometry={nodes.shoegroup1polySurface12polySurface34.geometry}
                    material={nodes.shoegroup1polySurface12polySurface34.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftgroup1polySurface24polySurface36.geometry}
                    material={nodes.shoeshoe_leftgroup1polySurface24polySurface36.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftpolySurface7group1polySurface31.geometry}
                    material={nodes.shoeshoe_leftpolySurface7group1polySurface31.material}
                />
                <mesh
                    geometry={nodes.shoeshoe_leftgroup1polySurface13polySurface34.geometry}
                    material={nodes.shoeshoe_leftgroup1polySurface13polySurface34.material}
                />
            </group>
        </group>
    )
}



useGLTF.preload('/shoe05.glb')

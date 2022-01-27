import * as THREE from 'three'
import React, {Suspense ,useRef} from 'react'
import {OrbitControls, useGLTF, Environment, ContactShadows, useProgress ,Html} from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {Canvas} from "@react-three/fiber";
import classes from "./ShoeScene.module.scss";
import {useSnapshot } from 'valtio'
import {ColorSettingType, StateType} from "../../pages";
import { Loader } from '../../Components/Loader/Loader';

type GLTFResult = GLTF & {
    nodes: {
        wheel_fr004_TIRES001_0: THREE.Mesh
        wheel_fr004_TIRES001_0_1: THREE.Mesh
        wheel_fr004_TIRES001_0_2: THREE.Mesh
        wheel_fr004_TIRES001_0_3: THREE.Mesh
        wheel_fr004_CAR_PAINT001_0: THREE.Mesh
        wheel_fr004_BRAKES_0: THREE.Mesh
        wheel_fr004_TIRES_0: THREE.Mesh
        wheel_fr004_RED001_0: THREE.Mesh
        wheel_fr001_TIRES001_0: THREE.Mesh
        wheel_fr001_TIRES001_0_1: THREE.Mesh
        wheel_fr001_TIRES001_0_2: THREE.Mesh
        wheel_fr001_TIRES001_0_3: THREE.Mesh
        wheel_fr001_CAR_PAINT001_0: THREE.Mesh
        wheel_fr001_BRAKES_0: THREE.Mesh
        wheel_fr001_TIRES_0: THREE.Mesh
        wheel_fr001_RED001_0: THREE.Mesh
        bottom_BLACK_ROUGH_0: THREE.Mesh
        wing_BLACK_0: THREE.Mesh
        windows_BLACK_0: THREE.Mesh
        windows_GLASS_0: THREE.Mesh
        windows_CHROME_0: THREE.Mesh
        trunk_CAR_PAINT_0: THREE.Mesh
        trunk_BLACK_ROUGH_0: THREE.Mesh
        top_spoiler_CAR_PAINT_0: THREE.Mesh
        top_spoiler_BLACK_0: THREE.Mesh
        top_spoiler_GLASS_0: THREE.Mesh
        skirt_CARBON_0: THREE.Mesh
        rubber_BLACK001_0: THREE.Mesh
        roof_CAR_PAINT_0: THREE.Mesh
        rear_lights_RED_0: THREE.Mesh
        rear_lights_CHROME_0: THREE.Mesh
        rear_lights_RED_GLASS_0: THREE.Mesh
        rear_lights_YELLOW_0: THREE.Mesh
        rear_lights_BLACK_0: THREE.Mesh
        rear_bumper_CAR_PAINT_0: THREE.Mesh
        rear_bumper_CARBON_0: THREE.Mesh
        rear_bumper_BLACK_ROUGH_0: THREE.Mesh
        _rear_splitter_CARBON_0: THREE.Mesh
        air_intake_CARBON_0: THREE.Mesh
        air_intake_BLACK_ROUGH_0: THREE.Mesh
        air_intake_side_CARBON_0: THREE.Mesh
        body_CAR_PAINT_0: THREE.Mesh
        bumper_rear2_CAR_PAINT_0: THREE.Mesh
        door_CAR_PAINT_0: THREE.Mesh
        exhaust_GRAY_0: THREE.Mesh
        Fenders_CAR_PAINT_0: THREE.Mesh
        Fenders_CHROME_0: THREE.Mesh
        front_bumper_BLACK_ROUGH_0: THREE.Mesh
        front_bumper_CAR_PAINT_0: THREE.Mesh
        front_bumper_CARBON_0: THREE.Mesh
        fuel_filler_flap_CHROME_0: THREE.Mesh
        handle_CAR_PAINT_0: THREE.Mesh
        handle_CHROME_0: THREE.Mesh
        handle_BLACK_ROUGH_0: THREE.Mesh
        headlights_up_GLASS_0: THREE.Mesh
        headlights_up_CHROME_0: THREE.Mesh
        headlights_up_Material002_0: THREE.Mesh
        hood_CAR_PAINT_0: THREE.Mesh
        hood_BLACK_ROUGH_0: THREE.Mesh
        mirrors_BLACK_ROUGH_0: THREE.Mesh
        mirrors_CAR_PAINT_0: THREE.Mesh
        mirrors_Material_0: THREE.Mesh
        body001_CHROME_0: THREE.Mesh
        seats_LEATHER_0: THREE.Mesh
        seats_BLACK_0: THREE.Mesh
        seats_CHROME_0: THREE.Mesh
        seats_BLACK_ROUGH_0: THREE.Mesh
        seats_RED001_0: THREE.Mesh
        steering_wheel_LEATHER_0: THREE.Mesh
        steering_wheel_BLACK_ROUGH_0: THREE.Mesh
        steering_wheel_CARBON_0: THREE.Mesh
        steering_column_BLACK_ROUGH_0: THREE.Mesh
        steering_column_CHROME_0: THREE.Mesh
        tunnel_CARBON_0: THREE.Mesh
        tunnel_LEATHER_0: THREE.Mesh
        tunnel_BLACK_ROUGH_0: THREE.Mesh
        tunnel_GRAY_0: THREE.Mesh
        duct_CARBON_0: THREE.Mesh
        pedals_GRAY_0: THREE.Mesh
        pedals_CARBON_0: THREE.Mesh
        gauge_BLACK_ROUGH_0: THREE.Mesh
        gauge_CHROME_0: THREE.Mesh
        gauge_WHITE_0: THREE.Mesh
        doors_int_BLACK_ROUGH_0: THREE.Mesh
        doors_int_CAR_PAINT_0: THREE.Mesh
        doors_int_CARBON_0: THREE.Mesh
        doors_int_CHROME_0: THREE.Mesh
        doors_int_LEATHER_0: THREE.Mesh
        dash_top_BLACK_ROUGH_0: THREE.Mesh
        dash_bottom__BLACK_ROUGH_0: THREE.Mesh
        dash_bottom__BLACK_0: THREE.Mesh
        dash_bottom__LEATHER_0: THREE.Mesh
        dash_bottom__GRAY_0: THREE.Mesh
        dash_bottom__CHROME_0: THREE.Mesh
        body_amplifier_GRAY_0: THREE.Mesh
        body_amplifier_CHROME_0: THREE.Mesh
        body_amplifier_LEATHER_0: THREE.Mesh
        footrest_GRAY_0: THREE.Mesh
        gear_shift_lever_LEATHER_0: THREE.Mesh
        gear_shift_lever_BLACK_ROUGH_0: THREE.Mesh
        gear_shift_lever_GRAY_0: THREE.Mesh
        gear_shift_lever_CHROME_0: THREE.Mesh
        mirror_int_BLACK_ROUGH_0: THREE.Mesh
        mirror_int_Material_0: THREE.Mesh
        cabin_CAR_PAINT_0: THREE.Mesh
        cabin_CARBON_0: THREE.Mesh
        cabin_BLACK_ROUGH_0: THREE.Mesh
        dash_bottom_001_CHROME_0: THREE.Mesh
    }
    materials: {
        ['TIRES.001']: THREE.MeshStandardMaterial
        ['CAR_PAINT.001']: THREE.MeshPhysicalMaterial
        BRAKES: THREE.MeshStandardMaterial
        TIRES: THREE.MeshStandardMaterial
        ['RED.001']: THREE.MeshStandardMaterial
        BLACK_ROUGH: THREE.MeshStandardMaterial
        BLACK: THREE.MeshStandardMaterial
        GLASS: THREE.MeshPhysicalMaterial
        CHROME: THREE.MeshStandardMaterial
        CAR_PAINT: THREE.MeshPhysicalMaterial
        CARBON: THREE.MeshPhysicalMaterial
        ['BLACK.001']: THREE.MeshStandardMaterial
        material: THREE.MeshStandardMaterial
        RED_GLASS: THREE.MeshStandardMaterial
        YELLOW: THREE.MeshStandardMaterial
        GRAY: THREE.MeshStandardMaterial
        ['Material.002']: THREE.MeshStandardMaterial
        Material: THREE.MeshStandardMaterial
        LEATHER: THREE.MeshStandardMaterial
        WHITE: THREE.MeshStandardMaterial
    }
}
type PropsTypeCar = JSX.IntrinsicElements['group'] & {colorSettings: ColorSettingType}

function Car(props : PropsTypeCar) {
    const snap = useSnapshot(props.colorSettings)
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                        <mesh geometry={nodes.wheel_fr004_TIRES001_0.geometry} material={nodes.wheel_fr004_TIRES001_0.material} />
                        <mesh

                            geometry={nodes.wheel_fr004_TIRES001_0_1.geometry}
                            material={nodes.wheel_fr004_TIRES001_0_1.material}
                        />
                        <mesh
                            geometry={nodes.wheel_fr004_TIRES001_0_2.geometry}
                            material={nodes.wheel_fr004_TIRES001_0_2.material}
                        />
                        <mesh
                            geometry={nodes.wheel_fr004_TIRES001_0_3.geometry}
                            material={nodes.wheel_fr004_TIRES001_0_3.material}
                        />
                        <mesh
                            material-color={snap.items.wheels}
                            geometry={nodes.wheel_fr004_CAR_PAINT001_0.geometry}
                            material={nodes.wheel_fr004_CAR_PAINT001_0.material}
                        />
                        <mesh geometry={nodes.wheel_fr004_BRAKES_0.geometry} material={nodes.wheel_fr004_BRAKES_0.material} />
                        <mesh geometry={nodes.wheel_fr004_TIRES_0.geometry} material={nodes.wheel_fr004_TIRES_0.material} />
                        <mesh geometry={nodes.wheel_fr004_RED001_0.geometry} material={nodes.wheel_fr004_RED001_0.material} />
                        <mesh geometry={nodes.wheel_fr001_TIRES001_0.geometry} material={nodes.wheel_fr001_TIRES001_0.material} />
                        <mesh
                            geometry={nodes.wheel_fr001_TIRES001_0_1.geometry}
                            material={nodes.wheel_fr001_TIRES001_0_1.material}
                        />
                        <mesh
                            geometry={nodes.wheel_fr001_TIRES001_0_2.geometry}
                            material={nodes.wheel_fr001_TIRES001_0_2.material}
                        />
                        <mesh
                            geometry={nodes.wheel_fr001_TIRES001_0_3.geometry}
                            material={nodes.wheel_fr001_TIRES001_0_3.material}
                        />
                        <mesh
                            geometry={nodes.wheel_fr001_CAR_PAINT001_0.geometry}
                            material={nodes.wheel_fr001_CAR_PAINT001_0.material}
                        />
                        <mesh geometry={nodes.wheel_fr001_BRAKES_0.geometry} material={nodes.wheel_fr001_BRAKES_0.material} />
                        <mesh geometry={nodes.wheel_fr001_TIRES_0.geometry} material={nodes.wheel_fr001_TIRES_0.material} />
                        <mesh geometry={nodes.wheel_fr001_RED001_0.geometry} material={nodes.wheel_fr001_RED001_0.material} />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                        <group position={[0, 0, 0.01]}>
                            <mesh geometry={nodes.bottom_BLACK_ROUGH_0.geometry} material={nodes.bottom_BLACK_ROUGH_0.material} />
                        </group>
                        <mesh geometry={nodes.wing_BLACK_0.geometry} material={nodes.wing_BLACK_0.material} />
                        <mesh geometry={nodes.windows_BLACK_0.geometry} material={nodes.windows_BLACK_0.material} />
                        <mesh geometry={nodes.windows_GLASS_0.geometry} material={nodes.windows_GLASS_0.material} />
                        <mesh geometry={nodes.windows_CHROME_0.geometry} material={nodes.windows_CHROME_0.material} />
                        <mesh geometry={nodes.trunk_CAR_PAINT_0.geometry} material={nodes.trunk_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.trunk_BLACK_ROUGH_0.geometry} material={nodes.trunk_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.top_spoiler_CAR_PAINT_0.geometry} material={nodes.top_spoiler_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.top_spoiler_BLACK_0.geometry} material={nodes.top_spoiler_BLACK_0.material} />
                        <mesh geometry={nodes.top_spoiler_GLASS_0.geometry} material={nodes.top_spoiler_GLASS_0.material} />
                        <mesh geometry={nodes.skirt_CARBON_0.geometry} material={nodes.skirt_CARBON_0.material} />
                        <mesh geometry={nodes.rubber_BLACK001_0.geometry} material={materials['BLACK.001']} />
                        <mesh geometry={nodes.roof_CAR_PAINT_0.geometry} material={nodes.roof_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.rear_lights_RED_0.geometry} material={materials.material} />
                        <mesh material-color={snap.items.chrom} geometry={nodes.rear_lights_CHROME_0.geometry} material={nodes.rear_lights_CHROME_0.material} />
                        <mesh geometry={nodes.rear_lights_RED_GLASS_0.geometry} material={materials.RED_GLASS} />
                        <mesh geometry={nodes.rear_lights_YELLOW_0.geometry} material={materials.YELLOW} />
                        <mesh geometry={nodes.rear_lights_BLACK_0.geometry} material={nodes.rear_lights_BLACK_0.material} />
                        <mesh geometry={nodes.rear_bumper_CAR_PAINT_0.geometry} material={nodes.rear_bumper_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.rear_bumper_CARBON_0.geometry} material={nodes.rear_bumper_CARBON_0.material} />
                        <mesh
                            geometry={nodes.rear_bumper_BLACK_ROUGH_0.geometry}
                            material={nodes.rear_bumper_BLACK_ROUGH_0.material}
                        />
                        <mesh geometry={nodes._rear_splitter_CARBON_0.geometry} material={nodes._rear_splitter_CARBON_0.material} />
                        <mesh geometry={nodes.air_intake_CARBON_0.geometry} material={nodes.air_intake_CARBON_0.material} />
                        <mesh
                            geometry={nodes.air_intake_BLACK_ROUGH_0.geometry}
                            material={nodes.air_intake_BLACK_ROUGH_0.material}
                        />
                        <mesh
                            geometry={nodes.air_intake_side_CARBON_0.geometry}
                            material={nodes.air_intake_side_CARBON_0.material}
                        />
                        <mesh material-color={snap.items.body} geometry={nodes.body_CAR_PAINT_0.geometry} material={nodes.body_CAR_PAINT_0.material} />
                        <mesh
                            geometry={nodes.bumper_rear2_CAR_PAINT_0.geometry}
                            material={nodes.bumper_rear2_CAR_PAINT_0.material}
                        />
                        <mesh geometry={nodes.door_CAR_PAINT_0.geometry} material={nodes.door_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.exhaust_GRAY_0.geometry} material={nodes.exhaust_GRAY_0.material} />
                        <mesh geometry={nodes.Fenders_CAR_PAINT_0.geometry} material={nodes.Fenders_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.Fenders_CHROME_0.geometry} material={nodes.Fenders_CHROME_0.material} />
                        <mesh
                            geometry={nodes.front_bumper_BLACK_ROUGH_0.geometry}
                            material={nodes.front_bumper_BLACK_ROUGH_0.material}
                        />
                        <mesh

                            geometry={nodes.front_bumper_CAR_PAINT_0.geometry}
                            material={nodes.front_bumper_CAR_PAINT_0.material}
                        />
                        <mesh geometry={nodes.front_bumper_CARBON_0.geometry} material={nodes.front_bumper_CARBON_0.material} />
                        <mesh
                            geometry={nodes.fuel_filler_flap_CHROME_0.geometry}
                            material={nodes.fuel_filler_flap_CHROME_0.material}
                        />
                        <mesh geometry={nodes.handle_CAR_PAINT_0.geometry} material={nodes.handle_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.handle_CHROME_0.geometry} material={nodes.handle_CHROME_0.material} />
                        <mesh geometry={nodes.handle_BLACK_ROUGH_0.geometry} material={nodes.handle_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.headlights_up_GLASS_0.geometry} material={nodes.headlights_up_GLASS_0.material} />
                        <mesh geometry={nodes.headlights_up_CHROME_0.geometry} material={nodes.headlights_up_CHROME_0.material} />
                        <mesh geometry={nodes.headlights_up_Material002_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.hood_CAR_PAINT_0.geometry} material={nodes.hood_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.hood_BLACK_ROUGH_0.geometry} material={nodes.hood_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.mirrors_BLACK_ROUGH_0.geometry} material={nodes.mirrors_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.mirrors_CAR_PAINT_0.geometry} material={nodes.mirrors_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.mirrors_Material_0.geometry} material={nodes.mirrors_Material_0.material} />
                        <mesh geometry={nodes.body001_CHROME_0.geometry} material={nodes.body001_CHROME_0.material} />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                        <mesh geometry={nodes.seats_LEATHER_0.geometry} material={nodes.seats_LEATHER_0.material} />
                        <mesh geometry={nodes.seats_BLACK_0.geometry} material={nodes.seats_BLACK_0.material} />
                        <mesh geometry={nodes.seats_CHROME_0.geometry} material={nodes.seats_CHROME_0.material} />
                        <mesh geometry={nodes.seats_BLACK_ROUGH_0.geometry} material={nodes.seats_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.seats_RED001_0.geometry} material={nodes.seats_RED001_0.material} />
                        <mesh
                            geometry={nodes.steering_wheel_LEATHER_0.geometry}
                            material={nodes.steering_wheel_LEATHER_0.material}
                        />
                        <mesh
                            geometry={nodes.steering_wheel_BLACK_ROUGH_0.geometry}
                            material={nodes.steering_wheel_BLACK_ROUGH_0.material}
                        />
                        <mesh geometry={nodes.steering_wheel_CARBON_0.geometry} material={nodes.steering_wheel_CARBON_0.material} />
                        <mesh
                            geometry={nodes.steering_column_BLACK_ROUGH_0.geometry}
                            material={nodes.steering_column_BLACK_ROUGH_0.material}
                        />
                        <mesh
                            geometry={nodes.steering_column_CHROME_0.geometry}
                            material={nodes.steering_column_CHROME_0.material}
                        />
                        <mesh geometry={nodes.tunnel_CARBON_0.geometry} material={nodes.tunnel_CARBON_0.material} />
                        <mesh geometry={nodes.tunnel_LEATHER_0.geometry} material={nodes.tunnel_LEATHER_0.material} />
                        <mesh geometry={nodes.tunnel_BLACK_ROUGH_0.geometry} material={nodes.tunnel_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.tunnel_GRAY_0.geometry} material={nodes.tunnel_GRAY_0.material} />
                        <mesh geometry={nodes.duct_CARBON_0.geometry} material={nodes.duct_CARBON_0.material} />
                        <mesh geometry={nodes.pedals_GRAY_0.geometry} material={nodes.pedals_GRAY_0.material} />
                        <mesh geometry={nodes.pedals_CARBON_0.geometry} material={nodes.pedals_CARBON_0.material} />
                        <mesh geometry={nodes.gauge_BLACK_ROUGH_0.geometry} material={nodes.gauge_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.gauge_CHROME_0.geometry} material={nodes.gauge_CHROME_0.material} />
                        <mesh geometry={nodes.gauge_WHITE_0.geometry} material={materials.WHITE} />
                        <mesh geometry={nodes.doors_int_BLACK_ROUGH_0.geometry} material={nodes.doors_int_BLACK_ROUGH_0.material} />
                        <mesh geometry={nodes.doors_int_CAR_PAINT_0.geometry} material={nodes.doors_int_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.doors_int_CARBON_0.geometry} material={nodes.doors_int_CARBON_0.material} />
                        <mesh geometry={nodes.doors_int_CHROME_0.geometry} material={nodes.doors_int_CHROME_0.material} />
                        <mesh geometry={nodes.doors_int_LEATHER_0.geometry} material={nodes.doors_int_LEATHER_0.material} />
                        <mesh geometry={nodes.dash_top_BLACK_ROUGH_0.geometry} material={nodes.dash_top_BLACK_ROUGH_0.material} />
                        <mesh
                            geometry={nodes.dash_bottom__BLACK_ROUGH_0.geometry}
                            material={nodes.dash_bottom__BLACK_ROUGH_0.material}
                        />
                        <mesh geometry={nodes.dash_bottom__BLACK_0.geometry} material={nodes.dash_bottom__BLACK_0.material} />
                        <mesh geometry={nodes.dash_bottom__LEATHER_0.geometry} material={nodes.dash_bottom__LEATHER_0.material} />
                        <mesh geometry={nodes.dash_bottom__GRAY_0.geometry} material={nodes.dash_bottom__GRAY_0.material} />
                        <mesh geometry={nodes.dash_bottom__CHROME_0.geometry} material={nodes.dash_bottom__CHROME_0.material} />
                        <mesh geometry={nodes.body_amplifier_GRAY_0.geometry} material={nodes.body_amplifier_GRAY_0.material} />
                        <mesh geometry={nodes.body_amplifier_CHROME_0.geometry} material={nodes.body_amplifier_CHROME_0.material} />
                        <mesh
                            geometry={nodes.body_amplifier_LEATHER_0.geometry}
                            material={nodes.body_amplifier_LEATHER_0.material}
                        />
                        <mesh geometry={nodes.footrest_GRAY_0.geometry} material={nodes.footrest_GRAY_0.material} />
                        <mesh
                            geometry={nodes.gear_shift_lever_LEATHER_0.geometry}
                            material={nodes.gear_shift_lever_LEATHER_0.material}
                        />
                        <mesh
                            geometry={nodes.gear_shift_lever_BLACK_ROUGH_0.geometry}
                            material={nodes.gear_shift_lever_BLACK_ROUGH_0.material}
                        />
                        <mesh geometry={nodes.gear_shift_lever_GRAY_0.geometry} material={nodes.gear_shift_lever_GRAY_0.material} />
                        <mesh
                            geometry={nodes.gear_shift_lever_CHROME_0.geometry}
                            material={nodes.gear_shift_lever_CHROME_0.material}
                        />
                        <mesh
                            geometry={nodes.mirror_int_BLACK_ROUGH_0.geometry}
                            material={nodes.mirror_int_BLACK_ROUGH_0.material}
                        />
                        <mesh geometry={nodes.mirror_int_Material_0.geometry} material={nodes.mirror_int_Material_0.material} />
                        <mesh geometry={nodes.cabin_CAR_PAINT_0.geometry} material={nodes.cabin_CAR_PAINT_0.material} />
                        <mesh geometry={nodes.cabin_CARBON_0.geometry} material={nodes.cabin_CARBON_0.material} />
                        <mesh geometry={nodes.cabin_BLACK_ROUGH_0.geometry} material={nodes.cabin_BLACK_ROUGH_0.material} />
                        <mesh
                            geometry={nodes.dash_bottom_001_CHROME_0.geometry}
                            material={nodes.dash_bottom_001_CHROME_0.material}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}
type  PropsType ={
    colorSettings: ColorSettingType
}


export  const  ShoeScene:React.FC<PropsType>  =({colorSettings})=>{
    return(
        <div className={classes.scene_wrapper}>
            <Canvas frameloop={"demand"}>
                <ambientLight intensity={0.5}/>
                <spotLight intensity={0.1} position={[5,20,20]}/>
                <Suspense fallback={<Loader/>}>
                    <Car colorSettings={colorSettings}/>
                    <Environment files={'/royal_esplanade_1k.hdr'}/>
                    <ContactShadows position={[0,0,0]} opacity={1} scale={50} blur={1} far={50} resolution={256}/>
                </Suspense>
                <OrbitControls
                    maxAzimuthAngle={Math.PI / 2.2}
                    maxPolarAngle={Math.PI / 2.2}
                    maxDistance={10}
                    minDistance={2}
                    addEventListener={undefined}
                    hasEventListener={undefined}
                    removeEventListener={undefined}
                    dispatchEvent={undefined} />
            </Canvas>
        </div>
    )
}

useGLTF.preload('/shoe-draco.glb')

import React, {Suspense} from 'react'
import {OrbitControls,Environment, ContactShadows} from '@react-three/drei'
import {Canvas} from "@react-three/fiber";
import classes from "./ShoeScene.module.scss";
import {ColorSettingType} from "../../pages";
import { Loader } from '../../Components/Loader/Loader';
import {CarModel} from "../carModel";



type  PropsType ={
    colorSettings: ColorSettingType
}
export  const  Scene:React.FC<PropsType>  =({colorSettings})=>{
    return(
        <div className={classes.scene_wrapper}>
            <Canvas frameloop={"demand"}>
                <ambientLight intensity={0.5}/>
                <spotLight intensity={0.1} position={[5,20,20]}/>
                <Suspense fallback={<Loader/>}>
                    <CarModel colorSettings={colorSettings}/>
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


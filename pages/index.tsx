import type { NextPage } from 'next'
import classes from '../styles/Home.module.css'
import {Canvas} from "@react-three/fiber";
import { Suspense } from 'react';
import Shoes from "../Models/shoes";
import { Camera } from 'three/src/cameras/Camera';
import { OrbitControls } from '@react-three/drei';

const Home: NextPage = () => {
  return (
    <div className={classes.page_wrapper}>
      <Canvas>

        <ambientLight intensity={0.5}/>
        <Suspense fallback={null}>
          <Shoes />
        </Suspense>
          <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
      </Canvas>
    </div>
  )
}

export default Home

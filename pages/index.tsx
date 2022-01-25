import type { NextPage } from 'next'
import classes from '../styles/Home.module.css'
import React, {Suspense} from 'react';
import {ShoeScene} from "../Models/shoe";




const Home: NextPage = () => {

  return (
    <div className={classes.page_wrapper}>
      <ShoeScene/>
    </div>
  )
}

export default Home

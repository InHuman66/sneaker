import type {NextPage} from 'next'
import classes from '../styles/Home.module.scss'
import React from 'react';
import {ShoeScene} from "../Models/shoe";
import {proxy, useSnapshot} from "valtio";
import { HexColorPicker } from 'react-colorful';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

export  type  CurrentType = 'body' | 'wheels' | 'chrom'
export type ColorSettingType = typeof  state
export type  StateType ={
    current:  CurrentType  ,
    items: {
        body: string,
        wheels: string,
        chrom: string
    }
}


let state: StateType = proxy({
    current: 'body',
    items: {
        body: '#000000',
        wheels: '#ff0000',
        chrom: '#000000'
    }
})

let changeCurrent = (name: string)=>{
    // @ts-ignore
    state.current = name
}

let changeColor = (newColor: string)=>{
    state.items[state.current] = newColor
}


const Home: NextPage = () => {
    const snap = useSnapshot(state)
    return (
        <div className={classes.page_wrapper}>
            <ShoeScene colorSettings={state}/>
            <div className={classes.colorPicker_wrapper}>
                <HexColorPicker  color={snap.items[snap.current]} onChange={(color)=>{changeColor(color)}}/>
                <FormControl  className={classes.form_control}  fullWidth>
                    <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                        Parts name
                    </InputLabel>
                    <Select
                        onChange={(e)=>{changeCurrent(e.target.value)}}
                        variant={'standard'}
                        defaultValue={'body'}
                    >
                        <MenuItem value={'body'}>Body</MenuItem>
                        <MenuItem value={'wheels'}>Wheels</MenuItem>
                        <MenuItem value={'chrom'}>Chrom</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

    )
}

export default Home

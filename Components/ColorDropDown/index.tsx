
import * as React from 'react';
import classes from "./ColorDropDown.module.scss";
import {HexColorPicker} from "react-colorful";
import {useState} from "react";


type PropsType = {
    onChange?: (color: string) => void
}
export const ColorDropDown:React.FC<PropsType> = ({onChange}) => {
    let [extendedMode, setExtendedMode]= useState(false)
    let onClickSwitchOpen = ()=>{
        setExtendedMode(!extendedMode)
    }
    return (
        <div className={classes.color_menu}  style={{maxHeight: extendedMode ? '380px': '35px'}} >
            <div className={classes.title_dropDown} onClick={()=>{onClickSwitchOpen()}}>
                <p>Set Color </p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
            </div>
            <HexColorPicker className={classes.color_menu_custom} onChange={onChange}/>
        </div>
    );
};


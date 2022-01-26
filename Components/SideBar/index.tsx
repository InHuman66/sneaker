import classes from "./SideBar.module.scss";
import React from "react";
import {ColorDropDown} from "../ColorDropDown";



export const SideBar: React.FC = () => {




    return (
        <div className={classes.menu_wrapper}>
            <h2>Model Settings</h2>
            <div className={classes.block_menu}>
                <h3>Body Settings</h3>
                <ColorDropDown/>
            </div>
        </div>
    );
};
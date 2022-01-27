import {Html, useProgress} from "@react-three/drei";
import classes from "./Loader.module.scss";
import React from "react";
import {Canvas} from "@react-three/fiber";


export const Loader = () => {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
            <Html className={classes.title_wrapper} center>
                <h1>model&nbsp;loaded&nbsp;at&nbsp;&nbsp;{Math.ceil(progress)}%</h1>
                <div className={classes.lds_ellipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Html>
    );
};

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}

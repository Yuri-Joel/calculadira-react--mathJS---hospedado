import React from "react";
import "./buttonclear.css";

export const ButtonClear = (props)=>(
    <div  className="ButtonClear"  onClick={props.ClicarClear}>
    {props.children}
    </div>
);


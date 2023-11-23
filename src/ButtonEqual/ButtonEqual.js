import React from "react";
import "./ButtonEqual.css";


export const ButtonEqual = (props)=>(
    <div  className="ButtonEqual"  onClick={props.Clicar}>
    {props.children}
    </div>
);




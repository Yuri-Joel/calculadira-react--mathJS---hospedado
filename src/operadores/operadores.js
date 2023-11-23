import React from "react";
import "./operadores.css";

export const OperadorBasico = ({darkmode,...props})=>{
  
    
    return(
        <div className={darkmode ? "Operadordark":"containerOperador"}
        onClick={()=> props.Clicar(props.children)}>
            {props.children}
        </div>
    );
    }




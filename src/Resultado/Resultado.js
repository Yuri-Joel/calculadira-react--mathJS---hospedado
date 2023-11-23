import React from "react";
import "./resultado.css";


export const Resultado =({dados, darkmode})=>{
 
   
  return(
    <div className={darkmode? 'Resultadodark': 'Resultado'}>  
   {dados}
    </div>
);
  }
  
  
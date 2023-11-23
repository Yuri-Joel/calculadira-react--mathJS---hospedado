import React from "react"
import "./button.css"

export const Button = ({darkmode,...props})=>{



    return(
      <div className={darkmode? "container-Bdark":'container-B'} onClick={()=> props.Clicar(props.children)}>
       {props.children}
        </div>
    )
}
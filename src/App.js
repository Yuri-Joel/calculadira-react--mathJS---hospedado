import React,{useState, useEffect} from 'react';
import "./app.css"
import "./darkmode.css"
import {Button} from './Button/button'
import { ButtonEqual } from './ButtonEqual/ButtonEqual';
import { ButtonClear } from './ButtonLimpa/buttonclear';
import { OperadorBasico } from './operadores/operadores';
import { Resultado} from './Resultado/Resultado';
import {evaluate} from "mathjs"

function App(){

const [darkmode, setdarkmode] = useState(false)

  let dat = new Date()
  const data = localStorage.getItem("Calculadora")
  
  const [Storage, setStorage] = useState(data? JSON.parse(data): [])
  
    const [dados, setDados] = useState("");
    const [result, setResult] = useState("");

    const acrescentarDados = val =>{
      setResult(" ")
      setDados(dados + val);
    };
    useEffect(()=>{

    },[Storage])
  
    const calcularResultado =()=>{
      setResult(" ")
      if (dados){
        try {
          let explode = {
            id: dat.getTime(),
            expression: dados,
            result: ""
          }
          let V  = "";
           V += evaluate(dados);
           explode.result = V;
           
           setDados(V);
          
          if(V === "Infinity"){
            setDados("ERRO! ")
            
            return
          }
                
          const newDados = [...Storage, explode]
  setStorage(newDados)
  
  localStorage.setItem("Calculadora", JSON.stringify( newDados))
        
        } catch(error) {
          setDados("desconhecido")
        }
      
      }
    };

    const onDelete = (id)=>{
      const newfilter = Storage.filter((da)=> da.id !== id)
 
      setStorage(newfilter)
      localStorage.setItem("Calculadora", JSON.stringify(newfilter))
 }
 const valor = 1;
 const AllDelete =(valor)=>{
  const newfilter = Storage.filter((da)=> da.id === valor);
 
  setStorage(newfilter)
  localStorage.setItem("Calculadora", JSON.stringify(newfilter))
  }

  const Show = (expre, resultp)=>{
    console.log(resultp)
    setDados(expre)
    setResult( "= "+resultp)
    
  }
    return( 
        <div className={darkmode? 'darkmode': 'App'}>
          <div className='container'>
            <span style={{color:  darkmode? 'blue': 'yellow'}}>☀</span>
            <div className='switch-checkbox'>
              <label className='switch'>
                <input type="checkbox" onChange={()=> setdarkmode(!darkmode)}/>
                <span className='slider round'></span>
            </label>
            </div>
            <span style={{color: darkmode? '#c96fdfd': 'blue' }}>⚫</span>
          </div>
           
            <div className={darkmode? 'containercdark': 'containerCalc'} >
              <Resultado dados={dados +" "+ result} darkmode={darkmode} ></Resultado>
               
          
            <div className="group">
            <Button Clicar={acrescentarDados} darkmode={darkmode}>(</Button>
            <Button Clicar={acrescentarDados}  darkmode={darkmode}>)</Button>
            <Button Clicar={()=>setDados(`${dados}!`)}  darkmode={darkmode}>x!</Button>
            <Button Clicar={()=>setDados(`${dados}^2`)}  darkmode={darkmode}>x²</Button>
            <Button Clicar={()=>setDados(`${dados}sqrt(`)}  darkmode={darkmode}>√</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>n√</Button>
            </div>
            <div className='group'>
            <Button Clicar={()=> setDados(`${dados}sin(`)}  darkmode={darkmode}>sin</Button>
            <Button Clicar={()=> setDados(`${dados}cos(`)}  darkmode={darkmode}>cos</Button>
            <Button Clicar={()=> setDados(`${dados}tan(`)}  darkmode={darkmode}>tan</Button>
            <Button Clicar={()=> setDados(`${dados}^3`)}  darkmode={darkmode}>x³</Button> 
            <Button Clicar={()=> setDados(`${dados}cbrt(`)}  darkmode={darkmode}>³√</Button>
            <Button Clicar={()=> setDados(`${dados}^`)}  darkmode={darkmode}>xⁿ</Button>
            </div>
            <div className='group'>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>1</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>2</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>3</Button>
            <OperadorBasico Clicar={acrescentarDados} darkmode={darkmode}>/</OperadorBasico>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>%</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>ln</Button>
            </div>
            <div className='group'>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>4</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>5</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>6</Button>
            <OperadorBasico Clicar={acrescentarDados} darkmode={darkmode}>*</OperadorBasico>
            <Button Clicar={()=> setDados(`${dados}log(`)} darkmode={darkmode}>log</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>e</Button>
            </div>
            <div className='group'>
            
            <Button Clicar={acrescentarDados} darkmode={darkmode}>7</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>8</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>9</Button>
            <OperadorBasico Clicar={acrescentarDados} darkmode={darkmode}>-</OperadorBasico>
            <Button Clicar={()=> setDados(`1/${dados}`)} darkmode={darkmode}>1/x</Button>  
            <ButtonClear ClicarClear={()=> {setDados(""); setResult("") }}>C</ButtonClear>
            </div>
            <div className='group'>
            
            <Button Clicar={acrescentarDados} darkmode={darkmode}>.</Button>
            <Button Clicar={acrescentarDados} darkmode={darkmode}>0</Button>
            <Button Clicar={()=> setDados(`${dados}pi`)} darkmode={darkmode}>π</Button>
            <OperadorBasico Clicar={acrescentarDados} darkmode={darkmode}>+</OperadorBasico>    
            <ButtonEqual Clicar={calcularResultado} >=</ButtonEqual>
            </div>

                </div>
          <div className="history">
          <table className={darkmode? 'dark':'light'}>
            <tbody>
              <tr>
                <th>expressao</th>
              </tr>
            { Storage.map((da)=>
            <tr key={da.id}>  
                 <td onClick={()=> Show(da.expression, da.result)} className="back">{da.expression }={ da.result}</td>
                 <td><button onClick={()=>onDelete(da.id)} className="delete">Del</button></td>
                
            </tr>
            )
            
            }
            <tr>
            <td><button className='delete' onClick={()=>AllDelete(valor)}>Esvaziar historico</button></td>
            </tr>
            </tbody>
        </table>
          </div>

        </div>
    )
}

export default App;
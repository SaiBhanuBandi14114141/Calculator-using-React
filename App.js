import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [input,setinput]=useState("");
  const [result,setresult]=useState();
  const change_handler=(e)=>
  {
    setinput(e.target.value)
  }
  const res_eval=()=>
  {
    setresult('Result is : ' + eval(input))
  }
  return (
    <div>
      <input type="text" name='input' value={input} onChange={change_handler} autoFocus/> <br></br>

      <h2>{result}</h2>
    
      <button onClick={()=>setinput(input+'1')}>1</button> &nbsp;
      <button onClick={()=>setinput(input+'2')}>2</button> &nbsp;
      <button onClick={()=>setinput(input+'3')}>3</button> &nbsp;
      <button onClick={()=>setinput(input+'+')}>+</button> <br></br> <br></br>

      <button onClick={()=>setinput(input+'4')}>4</button> &nbsp;
      <button onClick={()=>setinput(input+'5')}>5</button> &nbsp;
      <button onClick={()=>setinput(input+'6')}>6</button> &nbsp;
      <button onClick={()=>setinput(input+'-')}>-</button> <br></br> <br></br>

      <button onClick={()=>setinput(input+'7')}>7</button> &nbsp;
      <button onClick={()=>setinput(input+'8')}>8</button> &nbsp;
      <button onClick={()=>setinput(input+'9')}>9</button> &nbsp;
      <button onClick={()=>setinput(input+'/')}>/</button> &nbsp; <br></br> <br></br>

      <button onClick={()=>setinput(input+'0')}>0</button> &nbsp;
      <button onClick={()=>setinput(input.replace(input[input.length-1],''))}>D</button> &nbsp;
      <button onClick={()=>setinput("")}>C</button> &nbsp;
      <button onClick={()=>setinput(input+'*')}>*</button> <br></br> <br></br>
      <button onClick={res_eval} >=</button>

    </div>
  )
}
export default App
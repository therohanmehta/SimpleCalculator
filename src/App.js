import React, {useState, } from "react";
import "./style.css";

export default function App() {
  const [result, setResult] = useState('')

  const handleInput = (e)=>{
    setResult(result.concat(e.target.value))
  }
  const clearInput = ()=>{
    setResult('')
  }
  const calculate = ()=>{
    setResult(eval(result))
  }
  return (
    <div className='calBox'>
     <input type="text" placeholder='0' className='result' value={result}/>
     <input type="button" value='9' className='button' onClick={handleInput}/>
     <input type="button" value='8' className='button' onClick={handleInput}/>
     <input type="button" value='7' className='button' onClick={handleInput}/>
     <input type="button" value='6' className='button' onClick={handleInput}/>
     <input type="button" value='5' className='button' onClick={handleInput}/>
     <input type="button" value='4' className='button' onClick={handleInput}/>
     <input type="button" value='3' className='button' onClick={handleInput}/>
     <input type="button" value='2' className='button' onClick={handleInput}/>
     <input type="button" value='1' className='button' onClick={handleInput}/>
     <input type="button" value='0' className='button' onClick={handleInput}/>
     <input type="button" value='.' className='button' onClick={handleInput}/>
     <input type="button" value='+' className='button' onClick={handleInput}/>
     <input type="button" value='-' className='button' onClick={handleInput}/>
     <input type="button" value='*' className='button' onClick={handleInput}/>
     <input type="button" value='/' className='button' onClick={handleInput}/>
     <input type="button" value='%' className='button' onClick={handleInput}/>
     <input type="button" value='(' className='button' onClick={handleInput}/>
     <input type="button" value=')' className='button' onClick={handleInput}/>
     <input type="button" value='**' className='button' onClick={handleInput}/>
     <input type="button" value='e' className='button' onClick={handleInput}/>
     <input type="button" value='Clear' className='button button1' onClick={clearInput}/>
     <input type="button" value='=' className='button button1' onClick={calculate}/>
    </div>
  );
}

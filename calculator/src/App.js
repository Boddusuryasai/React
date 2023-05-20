
import {useState} from "react"
const values=[0,1,2,3,4,5,6,7,8,9,"+","-","/","%","*","=","C"]
function App() {
  const [result,setResult] =  useState("")
  const handleClick =(value)=>{
    if(value== "="){
      setResult(eval(result))  
    }
    else if(value=="C"){
      window.location.reload()
    } 
    else {
      setResult(prev=>prev+value)
    }
   
  }
  return (<>
  <div className="flex flex-col justify-center items-center h-screen border ">
    <input type="text" value={result}  disabled={true} onChange={(e)=>setResult(e.target.value)}></input>
    <div className="grid grid-cols-3 w-48 ">
        {values.map((value,i)=>{
          return <button className="border mt-4" onClick={()=>handleClick(value)} key={i}>{value}</button>
        })}
    </div>
    </div>
    </>
  );
}

export default App;

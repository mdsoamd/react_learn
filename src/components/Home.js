import React from 'react'
import { useState,useEffect } from "react";

const Home = () => {

    const [state,setState] = useState(0)
    const [data,setData] = useState([])
  
    useEffect(()=>{
  
      async function getData(){
        const get = await fetch("https://fakestoreapi.com/products");
        const res = await get.json();
        setData(res);
        console.log(res)
      }
  
      
      getData();
  
      document.title = `(${state}) Http Api Call Using`
      
       
    },[state]);
    
    
    
  return (
    <div>
        
        <button onClick={()=>setState(state+1)}>Click me{state}</button>
     
     {
       data.map((element,index)=>{
        return(
         <div className="data" key={index}>
            <h4>{element.title}</h4>
            <h4>{element.category}</h4>
         </div>
        )
         
          
       })
     }
              
    </div>
  )
}

export default Home

import './App.css';
import Header from './components/Header';
import React,{useState} from 'react';




function App() {
  
  const [num,setNum] = useState(1);              //* <-- Array disturbing


  function inc(n){
    setNum(num +n);
  }

  function dec(n){
    setNum(num - n);
  }



  // let login = false
  
  return (
    <div className="App">


      {/* {                                //* <-- jsx ka andar if else condition use Karne Ka Tarika
        (()=>{
          
            if(login){
              return <h1 style={{color:"black"}}>Login</h1>
            }else{
              return <h1 style={{color:"black"}}>SignUp</h1>
            }

        })()
      } */}
      

      <Header/>                             {/* <-- Header component call */}


       <div className='main'>
        
        <h1 className='heading'>{num}</h1>

        <div className='buttons'>
        <button className='btn' onClick={()=> inc(2)}>increment</button>
        <button className='btn' onClick={()=> dec(1)}>decrement</button>
        </div>
        
      
        
       </div>
      

      
      
      {/* <img src="/favicon.ico" alt="" /> */}
      
      
    </div>
  );
}
 
export default App;



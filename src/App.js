import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [from, setFrom] = useState({});
  const [data, setData] = useState([]);


  const addData = () => {
        setData([...data,from])
        setFrom(from)
  }


  const removeItem = (index) => {
    const arr = data
    arr.splice(index,1);
    setData([...data])
      
  }
  
  

  return (
    <div className="App">
      <Header />

      <div className="from">
        <Stack direction="row" spacing={2}>

          <TextField
            value={from.name}
            onChange={(event) => setFrom({...from,name:event.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />

          <TextField 
           value={from.email}
           onChange={(event) => setFrom({...from,email:event.target.value})}
          id="outlined-basic" 
          label="Email" 
          variant="outlined" />

          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>

        </Stack>
      </div>






      {/* Data */}
      <div className="data">
         
         <div className="data_val">

           <h4>Name</h4>
           <h4>Email</h4>
           <h4>Remove</h4>
          
         </div>

         {
            data.map((element,index)=>{
              return(
                <div className="data_val">

                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                <Button onClick={()=>removeItem(index)} variant="contained" color="error">
                   <DeleteIcon/>
                  </Button>
                  </Stack>
               
              </div>
              )
            })
         }
        
      </div>


      
    </div>
  );
}

export default App;

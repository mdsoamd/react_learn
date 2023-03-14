import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json';



function App() {
  let login = false
  return (
    <div className="App">


      {                                // *<-- jsx ka andar if else condition use Karne Ka Tarika
        (()=>{
          
            if(login){
              return <h1 style={{color:"black"}}>Login</h1>
            }else{
              return <h1 style={{color:"black"}}>SignUp</h1>
            }

        })()
      }
      

      <Header/>                             {/* <-- Header component call */}

      <div className='main'>

        {movies.map((element ,index) => {
          return(
            <Movie                           //* <-- Movie component call
            key={index} 
            title={element.Title}
            year={element.Year} 
            img={element.Poster} />
          )
        })

        }
           
      </div>
      
      
    </div>
  );
}
 
export default App;



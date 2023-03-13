import './App.css';
import Header from './Header';
// import {Header,Footer} from './Header';       //* <-- Multiple function import Karne Ka Tarika


function App() {
  let Name = "Somad";
  return (
    <div className="App">
            <Header/>
            <p>{Name}</p>
    </div>
  );
}
 
export default App;



import { color } from "@mui/system"
import { Link } from "react-router-dom"

const Header = () => {


  
  return (
    <div className="header">

        <Link to={'/'}> <h1 style={{color:"red",cursor:"pointer"}}>Home</h1></Link>
        <Link to={'/about'}> <h1 style={{color:"red",cursor:"pointer"}}>about</h1></Link>
        <Link to={'/contact'}> <h1 style={{color:"red",cursor:"pointer"}}>contact</h1></Link>
       
        
        </div>
  )
}

export default Header
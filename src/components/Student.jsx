import Comp from "./Comp"
import propTypes from "prop-types"


const Student = (props) => {      //* <-- yah pahla Tarika hai component mein data get Karne Ka  
  return (
    <>

    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name={props.name}/>                 {/* <-- yah dusra component mein data send Karne Ka Tarika hai */}

    </>
  )
}



//* First This Packages install --> npm i prop-types

Student.propTypes = {             //* <-- yah Tarika se Ham props ka time define kar sakte hain
    name:propTypes.string,
    age:propTypes.number
}




Student.defaultProps = {         //* <-- Kiska kam hai props Agar nahin mila hai to yah provide Kiya hua defaul value show Karega
    name:"Default Name",
    age:0
}




export default Student
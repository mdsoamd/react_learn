import './movie.css'


const Movie = (props) => {
  return (
    <div className="movie" onClick={() => console.log(`Movie Clicked ${props.title}`)}>
      <img src={props.img} alt=""/>
       <p>{props.title}</p>
       <p>Year: {props.year}</p>
        
    </div>
  )
}

export default Movie
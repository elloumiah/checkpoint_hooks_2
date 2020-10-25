import React, { useState } from "react";
import "./App.css";
// import Moviecard from "./components/Moviecard";
import Movielist from "./components/Movielist";
import Rating from './components/Rating'
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./Assets/aa.jpg";
import image2 from "./Assets/bb.jpg";
import image3 from "./Assets/cc.jpg";

const moviesL = [
  {
    title: "Bloodshot",
    image: image1,
    description: "Action movie",
    rate: "1",
  },
  {
    title: "The GOD Father",
    image: image2,
    description: "Action movie",
    rate: "5",
  },
  {
    title: "Black widow",
    image: image3,
    description: "Sciense Fiction movie",
    rate: "3",
  },
];

function App() {
  const [movies, setMovies] = useState(moviesL);
  const [rate, setRate] = useState('');
  return (
    <div className="App">
      <div className="rating">

      <Rating testRating={true} rate={rate} filterByRate={(rate) =>setRate(rate)} />
      </div>
      <Movielist movies={movies} setMovies={setMovies} rate={rate}/>
      {console.log(movies.rate)}
    </div>
  );
}

export default App;

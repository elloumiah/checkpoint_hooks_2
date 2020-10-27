import React, { useState } from "react";
import Moviecard from "./Moviecard";
import ModalAdd from "./modal";
import Searchmovie from "./filter";

function Movielist({movies, setMovies ,rate}) {
  const cardsStyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    justifyContent: "space-around",
    gap: 12,
  };
  const [Search, setSearch] = useState("");
  
  
  return (
    <div >
      <div className="rating">
        <Searchmovie setSearch={setSearch}  />
      </div>
      <div style={cardsStyle}>
      {movies.filter(movie => movie.title.toUpperCase().includes(Search.toUpperCase()) && (movie.rate >= rate) )
        .map((movie, i) => (
          <Moviecard movie={movie} key={i} />
        ))}
        </div>
        <div className="rating">
      <ModalAdd movies={movies} setMovies={setMovies} />

        </div>
    </div>
  );
}
export default Movielist;

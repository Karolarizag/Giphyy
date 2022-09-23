import React from "react";
import { Link } from "wouter";

export default function Category ({name, options = []}) {

  return (
  
    <section class="mt-10">
      <h4> { name } </h4>
      <ul>
        {options.map((anime) => (
          <li key={anime.split(' ').join('+')} >
            <Link to={`/search/${anime}`}> 
              <p class="my-2"> {anime} </p> 
            </Link>
          </li>
        ))}
      </ul>
    </section>

  )
}

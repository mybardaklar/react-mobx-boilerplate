import React from 'react';
import Link from 'next/link';

const MovieCard = props => {
  return(
    <Link href={'/movie/' + props.id}>
      <a className="movie-list__item" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster})`}} title="Dark Phoenix">
        <div className="movie-list__item__overlay"><span>Dark Phoenix</span></div>
      </a>
    </Link>
  );
};

export default MovieCard;

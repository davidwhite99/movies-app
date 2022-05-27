import React from 'react';
import { Info } from './Info.jsx';
import { MovieForm }  from './MovieForm';
import { Movie } from './Movie.jsx';

export const App = () => (
  <div>
    <h1>The Watchlist<sup>tm</sup></h1>
    <MovieForm/>
    <Info/>
  </div>
);

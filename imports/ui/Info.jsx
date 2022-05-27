import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';
import { MoviesCollection } from '../api/movies';
import { Movie } from './Movie.jsx';



const onEditClick = ({_id}) => {
  Meteor.call('movies.edit', _id)
}
const onRateClick = ({_id}, newRating) => {
  Meteor.call('movies.onRate', _id, newRating);
}
const onDeleteClick = ({_id}) => {
  Meteor.call('movies.delete', _id)
}

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });
  const movies = useTracker(() => {
    return MoviesCollection.find(
      {}, {
        sort: { isWatched: 1 },
      }
    ).fetch();
  });



  return (
    <div>
      <h2>Learn Movies Watch or Not?!</h2>
        <ul>{movies.map(movie => (
            <Movie
            key={movie._id}
            movie={movie}
            onEditClick={onEditClick}
            onRateClick={onRateClick}
            onDeleteClick={onDeleteClick}
          />
        ))} 
      </ul>
    </div>
  );
};

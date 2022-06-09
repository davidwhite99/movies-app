import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Movie } from '../ui/Movie';
import { MoviesCollection } from './movies';

Meteor.methods({
    'movies.insert'(movieTitle, movieYear){
        check(movieTitle, String);
        check(movieYear, String);
        console.log("inserting " + movieTitle + " now")
        MoviesCollection.insert({
            title:movieTitle,
            releaseYear:movieYear,
            isWatched:false, 
            rating:"0", 
            createdAt:new Date()
        })

    },
    'movies.delete'(movieId){
        const movie = MoviesCollection.findOne({_id: movieId});
        if(!movie){
            throw new Meteor.Error('No Such Movie');
        }
        MoviesCollection.remove(movieId);
    },

    'movies.onRate'(movieId, newRating){
        const movie = MoviesCollection.findOne({_id: movieId});
        console.log("Rating movie " + movie.title  + " " + newRating + "/10 now")
        MoviesCollection.update(movieId, {...movie, isWatched:true, rating:newRating});
        
    },
});
import { Meteor } from 'meteor/meteor';
import { MoviesCollection } from '../imports/api/movies';
import { LinksCollection } from '/imports/api/links';
import '/imports/api/moviesMethods';


function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

function insertMovie({title, releaseYear }) {
  MoviesCollection.insert({
    title,
    releaseYear,
    isWatched:false, 
    rating:0.0, 
    createdAt:new Date()})
}


Meteor.startup(() => {
  
  if(MoviesCollection.find().count() === 0) {

    insertMovie({
      title: "Jaws",
      releaseYear: 1975,
      
    });

    insertMovie({
      title: "Forrest Gump",
      releaseYear: 1994,
    });

    insertMovie({
      title: "Sonic The Hedgehog",
      releaseYear: 2020,
      
    });

    insertMovie({
      title: "Pulp Fiction",
      releaseYear: 1994,
      
    });
    insertMovie({
      title: "Wreck it Ralph",
      releaseYear: 2012,
      
    });
  }
});

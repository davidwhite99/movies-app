import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const MovieForm = () => {
    const [movieText, setMovieText] = useState('');
    const [yearText, setYearText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    
        if (!movieText || !yearText){
            setMovieText('');
            setYearText('');
            return;
        } 
    
        Meteor.call('movies.insert', movieText, yearText);
    
        setMovieText('');
        setYearText('');
    }; 


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type to add a new movie"
                value={movieText}
                onChange={(e) => setMovieText(e.target.value)}
            />
            <input
                type="number"
                placeholder="Release date..."
                value={yearText}
                onChange={(e) => setYearText(e.target.value)}
            />

            <button type="submit">Add Movie</button>
        </form>
    );
}
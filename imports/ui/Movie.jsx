import React, { useState } from 'react';

export const Movie = ({ movie, onEditClick, onRateClick, onDeleteClick}) => {

    const handleSubmit = e => {
        e.preventDefault();
    
        if (!ratingText){
            return;
        } 
        onRateClick(movie, ratingText);
        setRatingText('');
    };
    const [ratingText, setRatingText] = useState('');
    let watched = movie.isWatched ? "✔️" : "❌"; 
    let rating = movie.rating == 0 ? "Not Rated" : "Rating: " + movie.rating + "/10";
    return(
        
        <li>
            <h3>{movie.title} ({movie.releaseYear})</h3>  
            
            <p>Watched? {watched}   {rating}</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Rate Movie out of 10"
                    value={ratingText}
                    onChange={(e) => setRatingText(e.target.value)}
                />
                <button type="submit">Rate</button>
            </form>
            <button type="button" onClick={ () => onEditClick(movie) }>Edit</button>
            
            <button type="button" onClick={ () => onDeleteClick(movie) }>Delete</button>
        </li>
    )
};
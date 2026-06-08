import React from "react"
import { useState } from "react"
import "./MoodSongs.css"



const MoodSongs = ({ Songs =[] }) => {


    console.log("Songs:", Songs);

    
    if (!Songs || !Array.isArray(Songs)) {
        return <h2>Loading songs...</h2>;
    }

    return (
       <div className="mood-songs">
            <h2>Recommended Songs</h2>
           
                {Songs.map((song, index) => (
                    <div className='song' key={song._id || index}>
                       <div className="title">
                        <h3>{song.title ||   "No Title"}</h3>
                        <p>{song.artist ||   "No Artist"}</p>
                       </div>
                       <div className="play-pause-button">
                        <i className="ri-pause-line"></i>
                        <i className="ri-play-line"></i>
                       </div>
                    </div>
                ))}
           
        </div>
    )

}

export default MoodSongs;
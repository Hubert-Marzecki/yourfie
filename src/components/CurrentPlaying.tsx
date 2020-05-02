import React, {useState} from "react";

export const CurrentPlaying = (props:any) => {
    return(
        <div>
            <h3 className="text-white text-center font-black"> NOW PLAYING : {props.nowPlayingName}</h3>
                <img className="xl:max-w-2xl" src={props.nowPlayingImage}/>
            <button
                className="get-now-playing bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={(_) => props.getNowPlaying()}>
                Check Now Playing
            </button>
        </div>
    )
}

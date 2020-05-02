import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";

export const TopArtists = (props:any) => {
    const [topArtist, setTopArtist] = useState<any>([]);

    useEffect(() => {

    },[]);


    function getTopArtist() {
        spotifyApi.getMyTopArtists().then((response) => {

            let artist = response.items


        })
    }

    console.log(topArtist)


    return(
    <div className="mostly__listen flex flex-col">

        <div className="user__intro">
        <h1 className="user"> {props.userName} </h1>
        <h2 className="intro__caption"> you must love it </h2>
        </div>

        <div className="artist__info mt-auto">
            {/*<h1 className="artist"> ARTIST NAME {topArtis[0].name} </h1>*/}
            <p className="artist-details"> AUTHOR INFO </p>
        </div>

    </div>
    )
}
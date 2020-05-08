import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";
import "../styles/elements/_top-tracks.scss";


export const TopTracks = () :JSX.Element => {
    const [topTracks, setTopTracks] = useState<Array<any>>([]);
    let [offset, setOffset] = useState<number>(1);
    const LIMIT = 6;

    useEffect(() => {
        loadTopTracks()
    },[]);

    async function loadTopTracks() {
        let responseData  = await fetchTopTracks();
        setOffset(0)
        setTopTracks(responseData)

    }
    function fetchTopTracks () {
        return spotifyApi.getMyTopTracks().then((response) => {
            return response.items
        })
    }
    console.log(topTracks)

    return(
   <div>

   </div>
    )
}
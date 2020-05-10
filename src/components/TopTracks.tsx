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
   <div className="tracks__card__container flex flex-col  justify-center ml-auto mr-auto">
       {topTracks.map((item , index)=> {
           return (

               <div

                   key={index}
                   className="card rounded  mt-5 flex ">
                   <img className="card__image " src={item.album.images[0].url} alt="Sunset in the mountains"/>


               </div>


           )
       })}
   </div>
    )
}
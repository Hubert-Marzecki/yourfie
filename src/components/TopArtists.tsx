import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";

// interface ArtistImages {
//     height: number
//         url: string,
// }
//
// interface ArtistList {
//     name: string,
//     genres: string[],
//     images: ArtistImages[],
//     followers: {
//         href:null,
//         total: number
//     }
// }
// const initialState : ArtistList[] = [
//     {
//         name: "strisng",
//         genres: ["dupsa", "dupa1"],
//         images: [{height:300, url:"dupa"}],
//         followers: {
//             href:null,
//             total: 30
//         },
//     },
// ]


export const TopArtists = (props: {userName: string}) :JSX.Element => {
    const [topArtist, setTopArtist] = useState<Array<any>>([]);
    let [offset, setOffset] = useState<number>(0);
    const LIMIT = 1;

    useEffect(() => {
        loadArtist()

    },[]);

async function loadArtist() {
    let responseData  = await fetchTopArtist();
    setTopArtist(responseData)

    function fetchTopArtist () {
        return spotifyApi.getMyTopArtists().then((response) => {
            return response.items
        })

    }
}

    const displayedArtist = (offset: number,limit:number) => topArtist.slice(offset,limit);
    const artistGallery = () => displayedArtist(offset,offset+LIMIT).map(item => item.images);
    const artistName = (offset:number, limit:number) => displayedArtist(offset, offset+LIMIT).map(item => item.name)
    const artistImage = () => artistGallery().map(wrapper => wrapper[0])[0]?.url;

    const allImages :string[] = topArtist.map(item => item.images).map(wraper => wraper[0].url)
    const allNames = topArtist.map(item => item.name)

    console.log(topArtist)
    function nextArtist() {
        if (offset + LIMIT >= topArtist.length){
           return
        }
        const newOffset = offset + LIMIT;
        setOffset(newOffset)
    }
    function previousArtist() {
        if (offset ===0){
            return
        }
        const newOffset = offset - LIMIT;
        setOffset(newOffset)
    }


    function artistCards () {
        return (
         <div className="flex card__container flex-wrap justify-center">
             {topArtist.map(item => {
                 return (
                     <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 bg-white">
                         <img className="w-full" src={item.images[0].url} alt="Sunset in the mountains"/>
                             <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2"> {item.name} </div>
                                 <p className="text-gray-700 text-base">
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                     Maiores et perferendis eaque, exercitationem praesentium nihil.
                                 </p>
                             </div>
                             <div className="px-6 py-4">
                                 <span
                                     className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.genres[0] ?  item.genres[0] : null}
                                 </span>
                                 <span
                                     className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.genres[1]}</span>
                                 <span
                                     className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{item.genres[2]}</span>
                             </div>
                     </div>
                 )
             })}
         </div>
        )
    }


    return(
    <div className="mostly__listen flex flex-col">

        <div className="user__intro">
        <h1 className="user__name text-white"> {props.userName} </h1>
        <h2 className="intro__caption text-white"> Your Top: #{topArtist.length} </h2>
        </div>
        <div className="artist__info text-center mt-auto">
            {/*<h1 className="artist__name text-white"> {artistName(offset,offset+LIMIT)} </h1>*/}
            {/*<p className="artist-details text-white"> AUTHOR INFO </p>*/}
            {artistCards()}
            <div className="artist__pagination text-center">
                {/*<button*/}
                {/*    className="bg-transparent mr-10 text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"*/}
                {/*    onClick={() => previousArtist()}*/}
                {/*> DAWAJ DO TYłU*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className="bg-transparent ml-10 text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"*/}
                {/*    onClick={() => nextArtist()}*/}
                {/*> DAWAJ DALEJ*/}
                {/*</button>*/}
            </div>

<div className="Item">

</div>





</div>



        <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>
    )
}
import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";
import axios, { AxiosResponse } from "axios";



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

// todo wyrzucić karty do innego kompoentu
// todo render gatunków, zeby nie był pusty
// todo dodać paginacje na liście artysów ( może mniej w rzędzie też?) (sprawdzić jaki zakres czasu obsługuje)
// todo sprawdzić jakie są dane o artyście (jak nie ma to wyszukać inne api)
//


export const TopTracks = (props: {userName: string}) :JSX.Element => {
    const [topTracks, setTopTracks] = useState<Array<any>>([]);
    let [offset, setOffset] = useState<number>(1);
    const LIMIT = 6;

    useEffect(() => {
        updateTopTracks()

    },[]);

    async function updateTopTracks() {
        let responseData  = await fetchTopArtistsLong();
        setOffset(0)
        setTopTracks(responseData)
        function fetchTopArtistsLong () {
            return spotifyApi.getMyTopTracks().then((response) => {
                return response.items
            })
        }
    }
    // async function updateTopArtist() {
    //     let responseData = await fetchTopArtists();
    //     setTopArtist(responseData)
    //     setOffset(0)
    //     function fetchTopArtists () {
    //         return spotifyApi.getMyTopArtists().then((response) => {
    //             return response.items
    //         })
    //     }
    // }
    // async function updateTopArtistShort() {
    //     let responseData = await fetchTopArtistsShort();
    //     setTopArtist(responseData)
    //     setOffset(0)
    //     function fetchTopArtistsShort () {
    //         return spotifyApi.getMyTopArtistsShort().then((response) => {
    //             return response.items
    //         })
    //     }
    // }

    console.log(topTracks)
    // function nextArtists() {
    //     if(topArtist.length <= offset+LIMIT) {
    //         return
    //     }
    //     window.scrollTo({ top: 20, behavior: 'smooth' });
    //     const newOffset = offset+LIMIT;
    //     setOffset(newOffset)
    // }
    // function previousArtist() {
    //     if (offset-LIMIT < 0) {
    //         return
    //     }
    //     window.scrollTo({ top: 20, behavior: 'smooth' });
    //     const newOffset = offset-LIMIT;
    //     setOffset(newOffset)
    // }
    //
    // function artistCards () {
    //     return (
    //         <div className="card__container flex flex-wrap sm:flex-wrap overflow-x-auto sm:justify-center ">
    //             {topArtist.slice(offset,offset+LIMIT).map((item, index)=> {
    //                 return (
    //
    //                     <div className="card max-w-sm rounded  shadow-lg m-2 bg-white ">
    //                         <img className="w-full" src={item.images[0].url} alt="Sunset in the mountains"/>
    //                         <div className="px-6 py-4">
    //                             <div className="font-bold text-xl mb-2">  {index+1+"."}{item.name} </div>
    //                             <div className="card__followers font-hairline text-xs">Followed by: {item.followers.total}</div>
    //                             <p className="text-gray-700 text-base">
    //                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
    //                                 Maiores et perferendis eaque, exercitationem praesentium nihil.
    //                             </p>
    //                         </div>
    //                         <div className="px-6 py-4">
    //                             {item.genres[0] ? <span
    //                                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[0] ?  item.genres[0] : null} </span> : null}
    //
    //                             {item.genres[1] ? <span
    //                                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[1] ?  item.genres[1] : null} </span> : null}
    //                             {item.genres[2] ? <span
    //                                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[2] ?  item.genres[2] : null} </span> : null}
    //                         </div>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    return(
      <div>


        </div>
    )
}
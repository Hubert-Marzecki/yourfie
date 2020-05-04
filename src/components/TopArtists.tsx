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


export const TopArtists = (props: {userName: string}) :JSX.Element => {
    const [topArtist, setTopArtist] = useState<Array<any>>([]);
    let [offset, setOffset] = useState<number>(1);
    const LIMIT = 6;
    const INITIAL_URL = 'https://api.spotify.com/v1/me/top/artists'

    useEffect(() => {
        updateTopArtistShort()

    },[]);

    async function updateTopArtistLong() {
        let responseData  = await fetchTopArtistsLong();
        setOffset(0)
        setTopArtist(responseData)
        function fetchTopArtistsLong () {
            return spotifyApi.getMyTopArtistsLong().then((response) => {
                return response.items
            })
        }
    }
    async function updateTopArtist() {
        let responseData = await fetchTopArtists();
        setTopArtist(responseData)
        setOffset(0)
        function fetchTopArtists () {
            return spotifyApi.getMyTopArtists().then((response) => {
                return response.items
            })
        }
    }
    async function updateTopArtistShort() {
        let responseData = await fetchTopArtistsShort();
        setTopArtist(responseData)
        setOffset(0)
        function fetchTopArtistsShort () {
            return spotifyApi.getMyTopArtistsShort().then((response) => {
                return response.items
            })
        }
    }




    console.log(topArtist[0])
    function nextArtists() {
        if(topArtist.length <= offset+LIMIT) {
            return
        }
        window.scrollTo({ top: 20, behavior: 'smooth' });
        const newOffset = offset+LIMIT;
        setOffset(newOffset)
    }
    function previousArtist() {
        if (offset-LIMIT < 0) {
            return
        }
        window.scrollTo({ top: 20, behavior: 'smooth' });
        const newOffset = offset-LIMIT;
        setOffset(newOffset)
    }

    function artistCards () {
        return (
            <div className="card__container flex flex-wrap sm:flex-wrap overflow-x-auto sm:justify-center ">
                {topArtist.slice(offset,offset+LIMIT).map((item, index)=> {
                    return (

                        <div className="card max-w-sm rounded  shadow-lg m-2 bg-white ">
                            <img className="w-full" src={item.images[0].url} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">  {index+1+"."}{item.name} </div>
                                <div className="card__followers font-hairline text-xs">Followed by: {item.followers.total}</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                {item.genres[0] ? <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[0] ?  item.genres[0] : null} </span> : null}

                                {item.genres[1] ? <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[1] ?  item.genres[1] : null} </span> : null}
                                {item.genres[2] ? <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[2] ?  item.genres[2] : null} </span> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return(
<div className="top__artists">
    <nav className=" px-8 pt-2 shadow-md bg-black fixed nav">
        <div className="-mb-px flex justify-center ">
            <a className="text-white no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
               href="#">
                Home
            </a>

            <a className="text-white no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3"
               href="#">
                Contant
            </a>

        </div>
    </nav>
    <div className="text-center text-xl font-black text-white pt-20"> YOUR TOP {topArtist.length} ARTIST </div>
    <div className="text-center text-xl font-hairline text-white"> Display data from time period </div>
    <div className="mb-5 text-center">
        <div className="inline-flex">
            <button
                onClick={() =>updateTopArtistShort()}
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold rounded-l  py-1 px-2 m-1">
                4 weeks
            </button>
            <button
                onClick={() =>updateTopArtist()}
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-1 px-2 m-1">
               6 months
            </button>
            <button
                onClick={() => updateTopArtistLong()}
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-1 px-2 rounded-r m-1">
               Beggining!
            </button>
        </div>
    </div>
            {artistCards()}

            <div className="flex  justify-center mt-5 mb-5">
                <button
                    className= {offset === 0 ? "text-white fill-current  mr-1 px-2 py-1" :"text-white border fill-current  mr-1 px-2 py-1"}
                    onClick={() => previousArtist()}
                >
                    {offset === 0 ? "Click on right button!" : "Move Back" }
                </button>
                <button
                    className={offset+LIMIT> topArtist.length ? "text-white fill-current  mr-1 px-2 py-1" : "text-white border fill-current  ml-1 px-2 py-1"}
                    onClick={() => nextArtists() }
                >
                    {offset+LIMIT< topArtist.length ? "See More" : "Chceck other list!" }
                </button>

            </div>





        </div>
    )
}
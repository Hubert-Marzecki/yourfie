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


export const Main = (props: {userName: string}) :JSX.Element => {
    const [topArtist, setTopArtist] = useState<Array<any>>([]);
    let [offset, setOffset] = useState<number>(1);
    const LIMIT = 10;
    const INITIAL_URL = 'https://api.spotify.com/v1/me/top/artists'

    useEffect(() => {
        updateTopArtist()

    },[]);

async function updateTopArtist() {
    let responseData  = await fetchTopArtistsLong();
    setTopArtist(responseData)

    function fetchTopArtistsLong () {
        return spotifyApi.getMyTopArtistsLong().then((response) => {
            return response.items
        })
    }
}

    function fetchTopArtistsShort () {
        return spotifyApi.getMyTopArtistsShort().then((response) => {
            return response.items
        })
    }
    function fetchTopArtists () {
        return spotifyApi.getMyTopArtists().then((response) => {
            return response.items
        })
    }


    console.log(topArtist)
function nextArtists() {
    if(topArtist.length <= offset+LIMIT) {
        return
    }
const newOffset = offset+LIMIT;
setOffset(newOffset)
}
function previousArtist() {
if(offset === 0) {
    return
}
    const newOffset = offset-LIMIT;
    setOffset(newOffset)
}

    function artistCards () {
        return (
         <div className="card__container flex flex-wrap justify-center">
             {topArtist.map(item => {
                 return (

                     <div className="max-w-sm rounded  shadow-lg m-2 bg-white card">
                         <img className="w-full" src={item.images[0].url} alt="Sunset in the mountains"/>
                             <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2"> {item.name} </div>
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
    <div className="pick__category flex flex-col">
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

        <div className="user__intro mt-10">
            {/*<h1 className="user__name text-white"> {props.userName} </h1>*/}
            {/*<h2 className="intro__caption text-white"> Your Top: #{topArtist.length} Artist </h2>*/}
        </div>
        <div className="hero text-center text-white text-3xl mt-20 mb-10">
            WHAT YOU WANT YO KNOW ABUOT YOUR FAVORITE MUSIC?
        </div>
        <div className="card__container flex flex-wrap   justify-center">



        <div className="max-w-sm rounded  shadow-lg m-2 bg-white card">
            <img className="w-full" src="https://picsum.photos/id/177/2515" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> YOUR TOP ARTISTS </div>
                <div className="card__followers font-hairline text-xs">Followed by: FOLLOW </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 py-4">
            </div>
        </div>

        <div className="max-w-sm rounded  shadow-lg m-2 bg-white card">
            <img className="w-full" src="https://picsum.photos/id/177/2515" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> YOUR TOP ALBUMS / GENRES </div>
                <div className="card__followers font-hairline text-xs">Followed by: FOLLOW </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 py-4">
            </div>
        </div>

    <div className="max-w-sm rounded  shadow-lg m-2 bg-white card">
        <img className="w-full" src="https://picsum.photos/id/177/2515" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> YOUR TOP TRACKS </div>
            <div className="card__followers font-hairline text-xs">Followed by: FOLLOW </div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 py-4">
        </div>
    </div>
</div>
    {/*{artistCards()}*/}

{/*<div className="flex  justify-center mt-10">*/}
{/*    <button*/}
{/*        className="text-white border fill-current  mr-1 px-2 py-1"*/}
{/*        onClick={() => previousArtist()}*/}
{/*    >*/}
{/*        MOVE BACK*/}
{/*    </button>*/}
{/*    <button*/}
{/*        className="text-white border fill-current  ml-1 px-2 py-1"*/}
{/*        onClick={() => nextArtists()}*/}
{/*    >*/}
{/*        SEE MORE*/}
{/*    </button>*/}

{/*</div>*/}






    </div>
    )
}
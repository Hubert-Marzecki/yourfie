import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";
import "../styles/elements/_top-artists.scss";



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
    const [isFollowed, setIsFollowed] = useState <Array<boolean>>  ([true])
    let [offset, setOffset] = useState<number>(1);
    const LIMIT = 6;

    useEffect(() => {
        updateTopArtistShort()
        getFollowShort()
    },[]);

    async function updateTopArtistLong() {
        let responseData  = await fetchTopArtistsLong();
        setOffset(0)
        setTopArtist(responseData)

    }
    function fetchTopArtistsLong () {
        return spotifyApi.getMyTopArtistsLong().then((response) => {
            return response.items
        })
    }
    async function updateTopArtist() {
        let responseData = await fetchTopArtists();
        setTopArtist(responseData)
        setOffset(0)

    }
    function fetchTopArtists () {
        return spotifyApi.getMyTopArtists().then((response) => {
            return response.items
        })
    }
    async function updateTopArtistShort() {
        let responseData = await fetchTopArtistsShort();
        setTopArtist(responseData)
        setOffset(0)

    }
    function fetchTopArtistsShort () {
        return spotifyApi.getMyTopArtistsShort().then((response) => {
            return response.items
        })
    }

    async function getFollowShort () {
        // let [artist] = await Promise.all([fetchTopArtistsShort(), fetchTopArtists(), fetchTopArtistsLong ()]);
        let artist = await fetchTopArtistsShort()
        let artistId = artist.map(item => {return item.id})
        function fetchFollowedArtistsShort() {
            return spotifyApi.isFollowingArtists(artistId).then(response => {
                return response
            })
        }
        let responseData = await fetchFollowedArtistsShort()
        setIsFollowed(responseData)
    }

    async function getFollow () {
        let artist = await fetchTopArtists()
        let artistId = artist.map(item => {return item.id})
        function fetchFollowedArtists() {
            return spotifyApi.isFollowingArtists(artistId).then(response => {
                return response
            })
        }
        let responseData = await fetchFollowedArtists()
        setIsFollowed(responseData)
    }
    async function getFollowLong () {
        let artist = await fetchTopArtistsLong()
        let artistId = artist.map(item => {return item.id})
        function fetchFollowedArtistsLong() {
            return spotifyApi.isFollowingArtists(artistId).then(response => {
                return response
            })
        }
        let responseData = await fetchFollowedArtistsLong()
        setIsFollowed(responseData)
    }





const  displayIsFollowed =() => {

       return isFollowed?.map(item => item.toString())
}

    function updateCardsShort() {
        updateTopArtistShort()
        getFollowShort()
    }
    function updateCards(){
        updateTopArtist();
        getFollow()
    }
    function updateCardsLong() {
        updateTopArtistLong()
        getFollowLong()
    }
    function nextPage() {
        if(topArtist.length <= offset+LIMIT) {
            return
        }
        window.scrollTo({ top: 20, behavior: 'smooth' });
        const newOffset = offset+LIMIT;
        setOffset(newOffset)
    }
    function previousPage() {
        if (offset-LIMIT < 0) {
            return
        }
        window.scrollTo({ top: 20, behavior: 'smooth' });
        const newOffset = offset-LIMIT;
        setOffset(newOffset)
    }


    function artistCards () {
        //Nie tu
        return (
            <div className="card__container flex flex-wrap  sm:flex-wrap sm:justify-center ">
                {topArtist.slice(offset,offset+LIMIT).map((item, index)=> {
                    return (

                        <div
                            key={index}
                            className="card rounded  sm:w-1/4 md:w-1/4  shadow-lg m-2 bg-white ">
                            <img className="" src={item.images[0].url} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">  {index+1+"."} {item.name} {displayIsFollowed()?.[index]}</div>
                                <div className="card__followers font-bold font-hairline text-xs sm:text-sm ">Followed by: <span className="font-hairline"> {item.followers.total} people </span></div>
                                <div className="card__popularity font-bold font-hairline text-xs sm:text-sm"> Popularity: <span className="font-hairline">{item.popularity} /100 </span></div>
                                <div className="card__popularity font-bold text-xs sm:text-sm"> Id: <span className="font-hairline"> {item.id}</span></div>

                                <div className="flex">
                                <p className="text-base  mt-10">
                                    <a href={item.external_urls.spotify}> <button className="text-center bg-purple-700 rounded px-5 py-2 text-sm mt-1 font-semibold text-white mr-2"> See at Spotify </button></a>
                                </p>
                                <p className="text-base  sm:ml-auto mt-10">
                                    <a href={item.external_urls.spotify}> <button className="text-center bg-purple-700 rounded px-5 py-2 text-sm mt-1 font-semibold text-white mr-2"> Follow </button></a>
                                </p>
                            </div>

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
                onClick={() =>updateCardsShort() }
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold rounded-l  py-1 px-2 m-1">
                4 weeks
            </button>
            <button
                onClick={() =>updateCards()}
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-1 px-2 m-1">
               6 months
            </button>
            <button
                onClick={() => updateCardsLong()}
                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-1 px-2 rounded-r m-1">
               Beggining!
            </button>
        </div>
    </div>
            {artistCards()}

            <div className="flex justify-center mt-5 mb-5">
                <button
                    className= {offset === 0 ? "text-white fill-current  mr-1 px-2 py-1" :"text-white border font-bold fill-current  mr-1 px-2 py-1"}
                    onClick={() => previousPage()}
                >
                    {offset === 0 ? "Click ----> " : "Move Back" }
                </button>
                <button
                    className={offset+LIMIT> topArtist.length ? "text-white fill-current  mr-1 px-2 py-1 " : "text-white font-bold border fill-current  ml-1 px-2 py-1"}
                    onClick={() => nextPage() }
                >
                    {offset+LIMIT< topArtist.length ? "See More" : "Chceck other list!" }
                </button>

            </div>





        </div>
    )
}
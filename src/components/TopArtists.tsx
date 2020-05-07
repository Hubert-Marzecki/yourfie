import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";
import "../styles/elements/_top-artists.scss";
import {ArtistCard} from "./ArtistCard";
import {Pagination} from "./Pagination";



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
    const [topArtists, setTopArtists] = useState<Array<any>>([]);
    const [isFollowed, setIsFollowed] = useState <Array<boolean>>  ([true])
    let [offset, setOffset] = useState<number>(0);
    const LIMIT = 6;

    useEffect(() => {
        updateTopArtistShort()
        getFollowShort()
    },[]);

    // zmienić nazwę na update
    async function updateTopArtistLong() {
        let responseData  = await fetchTopArtistsLong();
        setOffset(0)
        setTopArtists(responseData)

    }
    function fetchTopArtistsLong () {
        return spotifyApi.getMyTopArtistsLong().then((response) => {
            return response.items
        })
    }
    async function updateTopArtist() {
        let responseData = await fetchTopArtists();
        setTopArtists(responseData)
        setOffset(0)

    }
    function fetchTopArtists () {
        return spotifyApi.getMyTopArtists().then((response) => {
            return response.items
        })
    }
    async function updateTopArtistShort() {
        let responseData = await fetchTopArtistsShort();
        setTopArtists(responseData)
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

    const nextPage = () => {
        if(topArtists.length <= offset+LIMIT) {
            return
        }
        window.scrollTo({ top: 20, behavior: 'smooth' });
        const newOffset = offset+LIMIT;
        setOffset(newOffset)
    }
    const previousPage = () => {
        if (offset-LIMIT < 0) {
            return
        }
        window.scrollTo({ top: 20, behavior: 'smooth' });
        const newOffset = offset-LIMIT;
        setOffset(newOffset)
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
    <div className="text-center text-xl font-black text-white pt-20"> YOUR TOP {topArtists.length} ARTIST </div>
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


    <ArtistCard
        topArtists={topArtists}
        // setIsFollowed={setIsFollowed}
        isFollowed={isFollowed}
        offset={offset}
        limit={LIMIT}/>
    <Pagination  nextPage={nextPage} previousPage={previousPage}/>

        </div>
    )
}
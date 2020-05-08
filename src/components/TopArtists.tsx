import React, { useState, useEffect } from "react";
import {
    fetchFollowedArtists, fetchFollowedArtistsLong,
    fetchFollowedArtistsShort,
    fetchTopArtists,
    fetchTopArtistsLong,
    fetchTopArtistsShort,
    spotifyApi
} from "../services/ApiClient";
import "../styles/elements/_top-artists.scss";
import {ArtistCard} from "./ArtistCard";
import {Pagination} from "./Pagination";
import {Navigation} from "./Navigation";


export const TopArtists = () :JSX.Element => {
    const [topArtists, setTopArtists] = useState<Array<any>>([]);
    const [isFollowed, setIsFollowed] = useState <Array<boolean>>  ([true])
    let [offset, setOffset] = useState<number>(0);
    const LIMIT = 6;

    useEffect(() => {
        loadTopArtistShort()
        getFollowShort()
    },[]);

    //Load top artists from  4 weeks/6msc/beginning
    async function loadTopArtistLong() {
        let responseData  = await fetchTopArtistsLong();
        setOffset(0)
        setTopArtists(responseData)

    }
    async function loadTopArtist() {
        let responseData = await fetchTopArtists();
        setTopArtists(responseData)
        setOffset(0)

    }
    async function loadTopArtistShort() {
        let responseData = await fetchTopArtistsShort();
        setTopArtists(responseData)
        setOffset(0)

    }

    // Update follow status of artists in different times
    async function getFollowShort () {
        let artist = await fetchTopArtistsShort()
        let artistId : string[]= artist.map(item => {return item.id})
        let responseData = await fetchFollowedArtistsShort(artistId)
        setIsFollowed(responseData)
    }
    async function getFollow () {
        let artist = await fetchTopArtists()
        let artistId = artist.map(item => {return item.id})
        let responseData = await fetchFollowedArtists(artistId)
        setIsFollowed(responseData)
    }
    async function getFollowLong () {
        let artist = await fetchTopArtistsLong()
        let artistId = artist.map(item => {return item.id})
        let responseData = await fetchFollowedArtistsLong(artistId)
        setIsFollowed(responseData)
    }

    //display artists from times period
    function updateCardsShort() {
        loadTopArtistShort()
        getFollowShort()
    }
    function updateCards(){
        loadTopArtist();
        getFollow()
    }
    function updateCardsLong() {
        loadTopArtistLong()
        getFollowLong()
    }

    // artists card Pagination
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
        <Navigation />
    <div className="text-center text-5xl font-black text-white pt-20 mb-10"> YOUR TOP {topArtists.length} ARTIST </div>
    <div className="text-center text-xl font-hairline text-base text-white"> Display data from time period </div>
    <div className=" text-center">
        <div className="inline-flex mt-1">
            <button
                onClick={() =>updateCardsShort() }
                className="bg-purple-400 hover:bg-purple-800 text-white font-bold rounded-l  py-1 px-2 m-1">
                4 weeks
            </button>
            <button
                onClick={() =>updateCards()}
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-1 px-2 m-1">
               6 months
            </button>
            <button
                onClick={() => updateCardsLong()}
                className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-1 px-2 rounded-r m-1">
               Beggining!
            </button>
        </div>
    </div>


    <ArtistCard
        topArtists={topArtists}
        setIsFollowed={setIsFollowed}
        isFollowed={isFollowed}
        offset={offset}
        limit={LIMIT}
    />
    <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
    />



        </div>
    )
}
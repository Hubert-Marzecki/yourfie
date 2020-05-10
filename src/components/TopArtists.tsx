import React, { useState, useEffect } from "react";
import {
    fetchArtistAlbums,
    fetchFollowedArtists,
    fetchFollowedArtistsLong,
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
import {ArtistAlbums} from "./ArtistAblums";
import {CardsUpdate} from "./CardsUpdate";


export const TopArtists = () :JSX.Element => {
    const [topArtists, setTopArtists] = useState<Array<any>>([]);
    const [isFollowed, setIsFollowed] = useState <Array<boolean>>  ([true])
    const [artistAlbums, setArtistAlbums] = useState<any>()
    const [artistSingles, setArtistSingles] = useState<any>()
    const [artistAppears, setArtistAppears] = useState<any>()
    const [artistCompilation, setArtistCompilation] = useState<any>()

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

    //load artist albums
    async function loadArtistAlbums(id:string) {
        let responseData = await fetchArtistAlbums(id);
        setArtistAlbums(responseData)
        console.log(artistAlbums)

    }

    //load artist singles
    //load artist appears
    //load artist compilation
    // todo fetch artist albums, appears, compilation in single function


    function displayArtistAlbums () {
        if (artistAlbums) {
            console.log(artistAlbums)
            return <ArtistAlbums
                artistAlbums={artistAlbums}

            />

        } return   [ <CardsUpdate
            updateCardsShort={updateCardsShort}
            updateCards={updateCards}
            updateCardsLong={updateCardsLong}
            topArtists={topArtists}
        />, <ArtistCard
            topArtists={topArtists}
            setIsFollowed={setIsFollowed}
            isFollowed={isFollowed}
            offset={offset}
            limit={LIMIT}
            setArtistAlbums={setArtistAlbums}
            loadArtistAlbums={loadArtistAlbums}
        />,
        <Pagination
            nextPage={nextPage}
            previousPage={previousPage}
        />,
        ]

    }


    return(
    <div className="top__artists">
        <Navigation />


        {displayArtistAlbums()}
    {/*<ArtistCard*/}
    {/*    topArtists={topArtists}*/}
    {/*    setIsFollowed={setIsFollowed}*/}
    {/*    isFollowed={isFollowed}*/}
    {/*    offset={offset}*/}
    {/*    limit={LIMIT}*/}
    {/*    setArtistAlbums={setArtistAlbums}*/}
    {/*    loadArtistAlbums={loadArtistAlbums}*/}
    {/*/>*/}




        </div>
    )
}
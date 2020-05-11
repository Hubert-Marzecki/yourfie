import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import {pushFollowArtist, pushUnfollowArtist, spotifyApi} from "../services/ApiClient";
import hearth from "../assets/kz-heart.svg"
import hearthTwo from "../assets/love-and-romance (1).png"
import hearthFull from "../assets/love-and-romance.png"
import "../styles/elements/_top-artists.scss";
import {Link} from 'react-router-dom'

export const ArtistCard = (
    props:
        {   topArtists: any[],
            isFollowed : boolean[],
            offset: number,
            limit: number,
            setIsFollowed : Dispatch<SetStateAction<boolean[]>>,
            setArtistAlbums : Dispatch<SetStateAction<any>>,
            loadArtistAlbums: (id:string) => void;
            loadArtistSingles: (id: string) => void;
            loadArtistAppears: (id: string) => void
            loadArtistCompilations: (id: string) => void
            loadArtist: (id:string) => void
        }) => {


    function updateFollowed(index:number, id:string) {
        if (props.isFollowed[index]) {
            pushUnfollowArtist(id)
        } pushFollowArtist(id)

        let newState = [];
        newState[index] = !props.isFollowed[index];
        props.setIsFollowed({...props.isFollowed, ...newState});
    }

    // todo fix artist images (same size bug)

    return (
        <div className="card__container flex flex-wrap  sm:flex-wrap sm:justify-center ">
            {props.topArtists.slice(props.offset, props.offset + props.limit).map((item, index) => {

                return (
                    <div
                        key={index}
                        className="card rounded  text-white  md:w-1/3 xl:w-1/4   m-5  "
                    >
                        <img className="card__image" src={item.images[0].url} alt="Sunset in the mountains"
                             onClick={() => {props.loadArtistAlbums(item.id);}}/>
                        <div className="px-6 py-4 card__info">
                            {/*{props.isFollowed[index + props.offset] ?*/}
                            {/*    <img src={hearthTwo} className="card__follow absolute l-30 "*/}
                            {/*         onClick={() => {updateFollowed(index + props.offset, item.id)}}*/}
                            {/*    />*/}
                            {/*    : <img src={hearthFull} className="card__follow unfollow absolute l-30"*/}
                            {/*         onClick={() => {updateFollowed(index + props.offset, item.id)}} />*/}
                            {/*}*/}

                            <div className="font-bold text-2xl mb-2">  {index + props.offset +1+"."} {item.name} </div>
                            <div className="card__followers font-bold  text-sm sm:text-base mt-5">Followers:  <span className="font-hairline"> {item.followers.total}</span></div>
                            <div className="card__popularity font-bold text-sm sm:text-base"> Popularity: <span className="font-hairline">{item.popularity} / 100 </span></div>

                            <div className="card__buttons flex flex-wrap mt-10 justify-between">
                                    <a href={item.external_urls.spotify}> <button className=" text-center bg-purple-700 rounded px-5 py-2 text-sm  font-semibold text-white "> See at Spotify </button></a>
                                    {props.isFollowed[index + props.offset] ?
                                        <button
                                            className="text-center bg-green-500 rounded px-5 py-2 text-sm  font-semibold text-white "
                                        onClick={() => {updateFollowed(index + props.offset, item.id)}}
                                    > Follow
                                        </button>
                                        :
                                        <button
                                        className="text-center bg-green-900 rounded px-5 py-2 text-sm  font-semibold text-white "
                                        onClick={() => {updateFollowed(index + props.offset, item.id)}}
                                    > Unfollow </button> }
                                    <button className="button__discography "
                                            onClick={() => {
                                                props.loadArtistAlbums(item.id);
                                                props.loadArtistSingles(item.id)
                                                props.loadArtist(item.id)
                                            }}
                                    > SEE DISCOGRAPHY </button>

                            </div>
                            <div className="flex justify-center mt-10">
                            {/*<button className="bg-green-500 rounded px-10 py-5"> GET ARTIS INFO! </button>*/}
                             </div>
                            <div className="mt-6   ">
                                {item.genres[0] ? <span
                                    className="inline-block text-white rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[0] ?  item.genres[0] : null} </span> : <span
                                    className="inline-block text-white rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">That is the mystery</span>}

                                {item.genres[1] ? <span
                                    className="inline-block text-white rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[1] ?  item.genres[1] : null} </span> : <span
                                    className="inline-block text-white rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">Suspicious isn't it?s</span>}

                            </div>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}
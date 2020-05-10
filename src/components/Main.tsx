import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";
import "../styles/elements/_main.scss";
import {Link} from 'react-router-dom'

export const Main = () :JSX.Element => {


    return(
    <div className="pick__category flex flex-col">


        <div className="user__intro mt-10">
            {/*<h1 className="user__name text-white"> {props.userName} </h1>*/}
            {/*<h2 className="intro__caption text-white"> Your Top: #{topArtist.length} Artist </h2>*/}
        </div>
        <div className="hero text-center text-white text-3xl mt-20 mb-10">
            WHAT YOU WANT YO KNOW ABOUT YOUR FAVORITE MUSIC?
        </div>
        <div className="card__container flex flex-wrap   justify-center">


<Link to='/topArtists'>
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
</Link>
            <Link to='/topTracks'>
        <div className="max-w-sm rounded  shadow-lg m-2 bg-white card">
            <img className="w-full" src="https://picsum.photos/id/177/2515" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">  YOUR TOP TRACKS </div>
                <div className="card__followers font-hairline text-xs">Followed by: FOLLOW </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 py-4">
            </div>
        </div>
            </Link>
            <Link to='/da'>
    <div className="max-w-sm rounded  shadow-lg m-2 bg-white card">
        <img className="w-full" src="https://picsum.photos/id/177/2515" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> SEE ARTIST TRACKS </div>
            <div className="card__followers font-hairline text-xs">Followed by: FOLLOW </div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 py-4">
        </div>
    </div>
            </Link>
</div>







    </div>
    )
}
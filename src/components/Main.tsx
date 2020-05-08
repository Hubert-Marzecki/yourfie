import React, { useState, useEffect } from "react";
import {spotifyApi} from "../services/ApiClient";
import "../styles/elements/_main.scss";


export const Main = () :JSX.Element => {


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







    </div>
    )
}
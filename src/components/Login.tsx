import React, {useState} from "react";
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import {spotifyApi, token} from "../services/ApiClient";

export const Login = (props: any) => {

    return(
        <div className="login flex flex-col content-center ">

            <div className="login__main flex flex-col content-center">
                <h1 className="login__text text-center text-white mt-20 ">Discover your music</h1>
                <h2 className="login__cta font-sans text-center font-heavy text-white text-6xl mt-20 ">Login to Spotify</h2>
            </div>
            <div className="login__main flex flex-col content-center">
                <a

                    href="http://localhost:8888" className="login__auth self-center">
                <button
                    className="login__button px-16 mt-10 self-center py-3 font-bold py-2 px-4 rounded-full">
                      LOGIN
                    </button>
                </a>

        </div>

            <div className="login__footer mt-auto flex flex-col text-center text-white content-center ">
                <p className="login__footer__usage-counter mb-5 font-hairline"> APP USED : 13523 TIMES </p>
                <div className="login__footer__social-icons flex ml-auto mr-auto mb-10">
                <img className="m-2" src={facebookIcon} alt=""/>
                <img className="m-2"src={instagramIcon} alt=""/>
                <img  className="m-2"src={twitter} alt=""/>
                </div>
            </div>




            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js"


import "./styles.css";
import {
} from "./services/PokeApiClient";

import {
} from "./Model";
import userEvent from "@testing-library/user-event";

const spotifyApi = new Spotify();

function App() {

  const params = getHashParams()
    const token = params.access_token ;

  if (token) {
    spotifyApi.setAccessToken(token);
  }
  // const [params, setParams] = useState(getHashParams())
  const [logedIn, setLogedIn] = useState(token ? true : false);
  const [nowPlaying, setNowPlaying] = useState <any >({
    name : "Not Checked",
    image: ""
  })



  //
  if (params.access_token) {
  spotifyApi.setAccessToken(params.access_token)
  }


  function getNowPlaying() {
  spotifyApi.getMyCurrentPlaybackState().then((response) => {
    console.log("response " + response)
    // setNowPlaying ({
    //   name: response.item.name,
    //   image: response.item.album.images[0].url
    // })
  }).catch((error) => {
    alert(error)
    })
  }

  console.log(params)
  console.log("loged in status" + token)
  console.log("params acces toke " +params.access_token)
  console.log("api" + spotifyApi)
  console.log("api.setAcces(-)" +spotifyApi.setAccessToken("da"))
  console.log("api.setAcces(+)"+ spotifyApi.setAccessToken(params.access_token))


  function getHashParams() {
    var hashParams : any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  return(
<div>


      <div className="background w-100">
        <h1 className="text-5xl text-white font-black tracking-wide text-center mt-40"> Find out what your soul jumps into </h1>
        <a href="http://localhost:8888">
          <button
              className="log-in bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
            Get your spotify data
          </button>
        </a>
        <div> NOW PLAYING {nowPlaying.name}</div>
        <img src={nowPlaying.image}/>
        <button
            className="get-now-playing bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() =>getNowPlaying()}>
        Check Now Playing
        </button>

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
  );
}

export default App;

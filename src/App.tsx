import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import "./styles/App.scss";
import {
  spotifyApi, token
} from "./services/ApiClient";

import {Login} from "./components/Login";
import {Main} from "./components/Main";
import {TopArtists} from "./components/TopArtists";
import {TopTracks} from "./components/TopTracks";


export interface NowPlaying {
  name: string,
  image: string
}



function App() {
  const [logedIn, setLogedIn] = useState<Boolean>(token ? true : false);
  const [user, setUser] = useState("________")
  const [nowPlaying, setNowPlaying] = useState <NowPlaying>({
    name : "Not Checked",
    image: ""
  })


  function getNowPlaying() {
  spotifyApi.getMyCurrentPlaybackState().then((response) => {
    if (response.item === null) {
      return
    } else setNowPlaying ({
      name: response.item.name,
      image: response.item.album.images[0].url
    })

  }).catch((error) => {
    alert("Is it the sound of silence? Turn on the music! ")
    })
  }
  function getUser ()  {
    spotifyApi.getMe().then((response) => {
      if (response.display_name === undefined || response.followers === undefined || response.followers.total === undefined){
        return
      }
      setUser(response.display_name)
    })
  }

  function changePage() : JSX.Element{
  if(logedIn){
    getUser()
    return (<TopArtists />)
  } else {
    return <Login  />
  }
  }


  return(
<div>
  {changePage()}


</div>
  );
}

export default App;

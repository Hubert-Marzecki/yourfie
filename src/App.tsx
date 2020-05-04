import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./styles/App.scss";
import {
  spotifyApi, token
} from "./services/ApiClient";

import userEvent from "@testing-library/user-event";
import {CurrentPlaying} from "./components/CurrentPlaying";
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
  const [currentPage, setCurrentPage] = useState({type: "LOGIN"})

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



  // getUser()
  // getTopArtist()

  function changePage() : JSX.Element{
  if(logedIn){
    getUser()
    return (<TopTracks userName={user} />)
  } else {
    return <Login  />
  }
  }

  // function mainView(): JSX.Element {
  //   switch (currentPage.type) {
  //     case "LOGIN":
  //       return <Login changePage={setCurrentPage} />;
  //     case "REGISTER":
  //       return <Register changePage={setCurrentPage} />;
  //     case "BOARDS":
  //       return <Board user={currentPage.user} />;
  //   }
  // }

  function protectedRoutes(): JSX.Element[]{
    if(logedIn){
      getUser()
      return [
        <Route path="/board" component = {()=><Main userName={user}/>}></Route>
      ]
    }
    return []
  }

  return(
<div>
  {changePage()}

  {/*<Router>*/}
  {/*  <div>*/}
  {/*    <Route path="/" exact component={()=> <Main userName={user}/>} />*/}
  {/*    <Route path="/login"  component={Login}/>*/}
  {/*    {protectedRoutes()}*/}
  {/*  </div>*/}

  {/*</Router>*/}


      {/*<div className="background w-100">*/}
      {/*  <h1 className="text-5xl text-white tracking-wide text-center mt-10"> Find out what your soul jumps into </h1>*/}
      {/*  <a href="http://localhost:8888">*/}
      {/*    <button*/}
      {/*        className={ logedIn ? "opacity-0" : "log-in bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}*/}
      {/*  >*/}
      {/*      Get your spotify data*/}
      {/*    </button>*/}
      {/*  </a>*/}

      {/*    <h3 className="text-white text-center font-black"> Hello {userInfo.name} </h3>*/}

      {/*    <CurrentPlaying*/}
      {/*        getNowPlaying={getNowPlaying}*/}
      {/*        nowPlayingName={nowPlaying.name}*/}
      {/*        nowPlayingImage={nowPlaying.image}*/}
      {/*    />*/}



      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*  <span></span>*/}
      {/*</div>*/}
</div>
  );
}

export default App;

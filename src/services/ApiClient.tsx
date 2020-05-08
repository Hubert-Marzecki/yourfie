
// import axios, { AxiosResponse } from "axios";
import Spotify from "spotify-web-api-js";

// export function getFromUrl<T>(url: string): Promise<T> {
//   return axios.get<T>(url).then((response: AxiosResponse<T>) => {
//     return response.data;
//   });
// }


export const spotifyApi = new Spotify();
spotifyApi.setAccessToken('');
function getHashParams() {
  var hashParams : any = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
const params = getHashParams()
export const token = params.access_token ;
if (token) {
  spotifyApi.setAccessToken(token);
}

// fetch top artist from 4weeks/6msc/beginning
export function fetchTopArtistsLong () {
  return spotifyApi.getMyTopArtistsLong().then((response) => {
    return response.items
  })
}
export  function fetchTopArtists () {
  return spotifyApi.getMyTopArtists().then((response) => {
    return response.items
  })
}
export   function fetchTopArtistsShort () {
  return spotifyApi.getMyTopArtistsShort().then((response) => {
    return response.items
  })
}

// check is artists follow
export  function fetchFollowedArtistsShort(artistId : string[]) {
  return spotifyApi.isFollowingArtists(artistId).then(response => {
    return response
  })
}
export  function fetchFollowedArtists(artistId : string[]) {
  return spotifyApi.isFollowingArtists(artistId).then(response => {
    return response
  })
}
export  function fetchFollowedArtistsLong(artistId : string[]) {
  return spotifyApi.isFollowingArtists(artistId).then(response => {
    return response
  })
}

// push follow / unfollow actions
export function pushFollowArtist(id: string) {
  return spotifyApi.followArtists([id]).then(response => {
    return response
  })
}
export  function pushUnfollowArtist(id:string) {
  return spotifyApi.unfollowArtists([id]).then(response => {
    return response
  })
}
import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import "../styles/elements/_artist-discography.scss";
import {fetchArtist, fetchFollowedArtistsLong, fetchTopArtistsLong} from "../services/ApiClient";
import hearth from "../assets/love-and-romance (1).png"

export const ArtistDiscography = (props: {
    artistAlbums:any
    artistSingles:any
    displayedArtist: any
    setArtistAlbums: Dispatch<SetStateAction<any>>,
}) => {


     const artistImg =() => {
        if(props.displayedArtist.images === undefined) {
            return
        } return <img
             className="ml-auto mr-auto w-11/12 sm:w-5/12 md:w-3/12 mt-10"
             src={props.displayedArtist.images[0].url} />
            }

    const albums : any [] = props.artistAlbums.items
    const singles : any[] = props.artistSingles.items

    function filterDubles(albums : any[]) {
        var seen :any = {};
        return albums.filter(item => {
            return seen.hasOwnProperty(item.name) ? false : (seen[item.name] = true);
        });
    }
    const artistAlbumsFiltered = filterDubles(albums)
    const artistSinglesFiltered = filterDubles(singles)

    console.log(artistSinglesFiltered)

    const displayArtistAlbums = () => {
      return  artistAlbumsFiltered.map((item, index) => {
            return (

                <div
                    key={index}
                    className="flex items-center border-solid mt-3 ml-5"
                >
                    <img src={item.images[2].url}
                    className="w-16"
                    />
                    <div className="flex flex-col justify-center">
                    <img src={hearth}
                         className="w-5 ml-5 album__save"
                    />
                    <div className="text-xs ml-4 "> Save </div>
                    </div>
                    <div className="album__info ml-5  flex flex-col">
                    <div className="text-sm sm:text-2xl"> {item.name} </div>
                    <div className="text-xs font-hairline tracking-wide"> Realise: {item.release_date}  </div>
                    </div>
                       <button className="bg-green-500 ml-auto mr-3 rounded px-3 py-1"><a  className="ml-auto" href={item.external_urls.spotify}> Spotify </a> </button>
                </div>

            )
        })
    }

    const displayArtistSingles = () => {
         return artistSinglesFiltered.map((item, index) => {
             return (
                 <div key={index}
                     className="flex items-center border-solid mt-3 ml-5">

                     <img src={item.images[2].url}
                          className="w-16"
                     />
                     <div className="album__info ml-10  flex flex-col">
                         <div className="text-sm sm:text-2xl"> {item.name} </div>
                         <div className="text-sm font-hairline tracking-wide"> Realise: {item.release_date}  </div>
                     </div>
                     <button className="bg-green-500 ml-auto mr-3 rounded px-3 py-1"><a  className="ml-auto" href={item.external_urls.spotify}> Spotify </a> </button>

                 </div>
             )
         })
    }



    return (
        <div className="text-white ">
            {artistImg()}
            <div className="text-center text-5xl font-black text-white pt-5 sm:pt-20 mb-10"> {props.displayedArtist.name} </div>
            <div className="flex flex-wrap justify-center ">

                <div className="flex flex-col text-center w-1/2 sm:w-1/12  text-2xl">
                    <div className="font-bold">{artistAlbumsFiltered.length}</div>
                    <div className="">Albums</div>
                </div>
                <div className="flex flex-col text-center w-1/2 sm:w-1/12 text-2xl">
                    <div className="font-bold">{artistSinglesFiltered.length}</div>
                    <div>Singles</div>
                </div>

            </div>
            <div className="container  ml-auto mr-auto">
                <h2 className="text-xl font-black mb-10 mt-10 ml-5"> ALBUMS </h2>
                {displayArtistAlbums()}

            </div>
            <div className="container  ml-auto mr-auto mb-10">
                <h2 className="text-xl font-black mb-10 mt-10 ml-5"> SINGLES </h2>
                {displayArtistSingles()}

            </div>

            <div className=" flex ml-auto mr-auto justify-center">
                <button className="bg-purple-600 rounded px-2 py-2 mb-10 font-heavy"

                > SEE OTHER ARTIST </button>
            </div>


        </div>
    )
}
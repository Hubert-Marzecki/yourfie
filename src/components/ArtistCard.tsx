import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import {spotifyApi} from "../services/ApiClient";

export const ArtistCard = (props: {topArtists: any[], isFollowed : boolean[], offset: number, limit: number, setIsFollowed : Dispatch<SetStateAction<boolean[]>> }) => {

    function updateFollowed(index:number, id:string) {
        let newState = [];
        newState[index] = !props.isFollowed[index];
        props.setIsFollowed({...props.isFollowed, ...newState});
        console.log(props.isFollowed[index])

        if(props.isFollowed[index]) {
            return spotifyApi.unfollowArtists([id]).then(response => {
                return response
            })
        }  return spotifyApi.followArtists([id]).then(response => {
            return response
        })
    }




    // dodać props zmienić typ seIsFollowed
    // follow - przyjmuje id, które następnie będzie zmieniało 1. konkretny kontener
    // konieczny re render stanu -> w tym momencie po reload stony dopiero się pojawia

    return (
        <div className="card__container flex flex-wrap  sm:flex-wrap sm:justify-center ">
            {props.topArtists.slice(props.offset, props.offset + props.limit).map((item, index)=> {
                return (
                    <div
                        key={index}
                        className="card rounded  sm:w-1/4 md:w-1/4  shadow-lg m-2 bg-white ">
                        <img className="card__image " src={item.images[0].url} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">  {index +1+"."} {item.name} </div>
                            <div className="card__followers font-bold  text-sm sm:text-base mt-5">Followed by: <span className="font-hairline"> {item.followers.total} people </span></div>
                            <div className="card__popularity font-bold text-sm sm:text-base"> Popularity: <span className="font-hairline">{item.popularity} / 100 </span></div>

                            <div className="flex flex-wrap mt-10">
                                <p className="text-base ">
                                    <a href={item.external_urls.spotify}> <button className=" text-center bg-purple-700 rounded px-5 py-2 text-sm mt-1 font-semibold text-white mr-2"> See at Spotify </button></a>
                                </p>
                                <p className="text-base ">
                                    {props.isFollowed[index] ? <button
                                        className="text-center  rounded px-5 py-2 bg-purple-300 text-sm mt-1 font-semibold text-white mr-2"
                                        onClick={() => {updateFollowed(index, item.id)}}
                                    > Followed </button> :<button
                                        className="text-center bg-green-500 rounded px-5 py-2 text-sm mt-1 font-semibold text-white mr-2"
                                        onClick={() => {updateFollowed(index, item.id)}}
                                    > Follow!  </button> }
                                </p>
                            </div>

                        </div>
                        <div className="px-6 py-4">
                            {item.genres[0] ? <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[0] ?  item.genres[0] : null} </span> : null}

                            {item.genres[1] ? <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[1] ?  item.genres[1] : null} </span> : null}
                            {item.genres[2] ? <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mt-1 font-semibold text-gray-700 mr-2">{item.genres[2] ?  item.genres[2] : null} </span> : null}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
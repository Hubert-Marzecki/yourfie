import React, { useState, useEffect } from "react";

export const ArtistCard = (props: {topArtistsCurrent: any[], isFollowed : boolean[]}) => {

    const  displayIsFollowed = ():string[]=> {
        return props.isFollowed?.map(item => item.toString())
    }

    return (
        <div className="card__container flex flex-wrap  sm:flex-wrap sm:justify-center ">
            {props.topArtistsCurrent.map((item, index)=> {
                return (

                    <div
                        key={index}
                        className="card rounded  sm:w-1/4 md:w-1/4  shadow-lg m-2 bg-white ">
                        <img className="card__image " src={item.images[0].url} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">  {item +1+"."} {item.name} </div>
                            <div className="card__followers font-bold  text-sm sm:text-base mt-5">Followed by: <span className="font-hairline"> {item.followers.total} people </span></div>
                            <div className="card__popularity font-bold text-sm sm:text-base"> Popularity: <span className="font-hairline">{item.popularity} / 100 </span></div>

                            <div className="flex flex-wrap mt-10">
                                <p className="text-base ">
                                    <a href={item.external_urls.spotify}> <button className=" text-center bg-purple-700 rounded px-5 py-2 text-sm mt-1 font-semibold text-white mr-2"> See at Spotify </button></a>
                                </p>
                                <p className="text-base ">
                                    {displayIsFollowed()?.[index] === "true" ? <button className="text-center  rounded px-5 py-2 bg-purple-300 text-sm mt-1 font-semibold text-white mr-2"> Followed </button> :<button className="text-center bg-green-500 rounded px-5 py-2 text-sm mt-1 font-semibold text-white mr-2"> Follow!  </button> }
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
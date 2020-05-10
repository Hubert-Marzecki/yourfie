import React, { useState, useEffect } from "react";

export const CardsUpdate = (props: {
    updateCardsShort: () => void,
    updateCards: () => void,
    updateCardsLong: () => void,
    topArtists:any[]}) => {

    return (
        <div>
        <div className="text-center text-5xl font-black text-white pt-20 mb-10"> YOUR TOP {props.topArtists.length} ARTIST </div>
    <div className="text-center text-xl font-hairline text-base text-white"> Display data from time period </div>
    <div className=" text-center">
        <div className="inline-flex mt-1">
            <button
                onClick={() =>props.updateCardsShort() }
                className="bg-purple-400 hover:bg-purple-800 text-white font-bold rounded-l  py-1 px-2 m-1">
                4 weeks
            </button>
            <button
                onClick={() =>props.updateCards()}
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-1 px-2 m-1">
                6 months
            </button>
            <button
                onClick={() => props.updateCardsLong()}
                className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-1 px-2 rounded-r m-1">
                Beggining!
            </button>
        </div>
    </div>
        </div>
    )
}
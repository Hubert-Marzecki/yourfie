import React, { useState, useEffect } from "react";

export const ArtistAlbums = (props: {artistAlbums:any}) => {

    const artistHref = props.artistAlbums.href;
    const artistId = artistHref.split('/')[5];


    return (
        <div>

            <div className='bg-black'>
                {/*<h1 className="text-white">{props.artistAlbums}</h1>*/}
                <h1 className="text-white"> {props.artistAlbums.href}</h1>
                <h1 className="text-white"> aaaa</h1>
                <h1 className="text-white"> aaaa</h1>
                <h1 className="text-white"> aaaa</h1>
                <h1 className="text-white"> aaaa</h1>
                <h1 className="text-white"> aaaa</h1>   <h1 className="text-white"> aaaa</h1>   <h1 className="text-white"> aaaa</h1>


            </div>






        </div>
    )
}
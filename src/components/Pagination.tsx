import React, { useState, useEffect } from "react";

export const Pagination = (props: {nextPage: () => void, previousPage: () => void}) => {


    return (
        <div>
            <ul className="flex  list-none rounded text-center justify-center mb-10">
             <li className="relative block py-2 px-6 m-5 cursor-pointer leading-tight bg-white border border-gray-300 text-purple-800 font-bold border-r-0 ml-0 rounded hover:bg-gray-300"
                 onClick={props.previousPage}
                   > PREVIOUS </li>
                <li className="relative block py-2 px-10 m-5 cursor-pointer leading-tight bg-white border border-gray-300 text-purple-800 font-bold border-r-0 ml-0 rounded hover:bg-gray-300"
                    onClick={props.nextPage}
                > NEXT </li>
            </ul>
        </div>
    )
}

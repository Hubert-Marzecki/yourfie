import React, { useState, useEffect } from "react";

export const Pagination = (props: {nextPage: () => void, previousPage: () => void}) => {


    return (
        <div>
            <ul className="flex  list-none rounded my-2 text-center justify-center ">
             <li className="relative block py-2 px-10 m-5 cursor-pointer leading-tight bg-white border border-gray-300 text-blue-700 font-bold border-r-0 ml-0 rounded hover:bg-gray-200"
                 onClick={props.previousPage}
                   > PREVIOUS </li>
                <li className="relative block py-2 px-10 m-5 cursor-pointer leading-tight bg-white border border-gray-300 text-blue-700 font-bold border-r-0 ml-0 rounded hover:bg-gray-200"
                    onClick={props.nextPage}
                > NEXT </li>
            </ul>
        </div>
    )
}

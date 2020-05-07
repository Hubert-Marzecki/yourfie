import React, { useState, useEffect } from "react";

export const Pagination = (props: {cardsPerPage:number, totalCards:number, paginate: (number:number) => void}) => {
const pageNumbers = [];

for (let i  = 1 ; i <Math.ceil(props.totalCards / props.cardsPerPage) +1; i++){
    pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="flex  list-none rounded my-2 text-center justify-center ">
                {pageNumbers.map(number => {
                  return  <li
                        key={number}
                        className="relative block py-2 px-10 m-5 cursor-pointer leading-tight bg-white border border-gray-300 text-blue-700 font-bold border-r-0 ml-0 rounded hover:bg-gray-200"
                        onClick={e => {e.preventDefault() ; props.paginate(number)}}
                    > {number} </li>
                })}

            </ul>
        </div>
    )
}

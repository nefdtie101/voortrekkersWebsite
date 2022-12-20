import {useEffect, useState} from "react";

export default function Aksies({name , description,url}){


    return(
        <div className='aksieBlokkie'>
            <h4 className='red'>{name}</h4>
            <p>{description}</p>
            <div><a href={url}>Skryf In</a></div>
        </div>
    )
}
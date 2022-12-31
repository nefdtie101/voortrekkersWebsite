import axios from "axios";
import Aksies from "../Component/aksies";
import {useEffect, useState} from "react";
import Head from "next/head";


export default function Kampe(){
    const [aksies , SetAksies] = useState([])
    const [appUrl , SetAppUrl] = useState([])

    useEffect(() => {
        getAksies()
        SetAppUrl(process.env.NEXT_PUBLIC_APP)
    } , [])

    function getAksies(){
        axios.get(process.env.NEXT_PUBLIC_API  + `/GetAllKampe`).then(res =>{
            SetAksies (res.data)
        })
    }
    return(
        <div>
            <Head>
                <title>Kampe</title>
            </Head>
            <h3 className='middle red'>Kampe</h3>
            {aksies.map((x) => (
                <Aksies url={`${appUrl}/Form/Basic?IdEvent=${x.idEvent}&Redirect=${x.redirectUri}`} className='middle' name={x.eventName} description={x.eventDiscription}/>
            ))}
        </div>
    )
}
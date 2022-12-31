import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../Component/nav";
import axios from "axios";
import {useEffect, useState} from "react";
import Aksies from "../Component/aksies";


export default function Home() {
  const [aksies , SetAksies] = useState([])
  const [appUrl , SetAppUrl] = useState([])

  useEffect(() => {
    getAksies()
    SetAppUrl(process.env.NEXT_PUBLIC_APP)
  } , [])

  function getAksies(){
    axios.get(process.env.NEXT_PUBLIC_API  + `/GetAllSpesialeAksies`).then(res =>{
      SetAksies (res.data)
    })
  }

  return (
      <div>
        <Head>
          <title>Leeuwenveld Staatmakers</title>
        </Head>
        <h3 className='middle red'>Spiesiale Aksies</h3>
        {aksies.map((x) => (
            <Aksies url={`${appUrl}/Form/BasicStudentForm?IdEvent=${x.idEvent}&Redirect=${x.redirectUri}`} className='middle' name={x.eventName} description={x.eventDiscription}/>
        ))}
      </div>
  )
}

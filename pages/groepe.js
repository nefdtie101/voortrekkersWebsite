import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Aksies from "../Component/aksies";
import Head from "next/head";




export default function Groepe() {
    const [orgs , SetOrgs ] = useState([])
    const [aksies , SetAksies] = useState([])
    const [appUrl , SetAppUrl] = useState([])
    const router = useRouter();

    useEffect(() => {
        getAllOrganizations();
        getAksiesByOrganization();
        SetAppUrl(process.env.NEXT_PUBLIC_APP)
    } , [])


    function getAllOrganizations(){
        if(sessionStorage.getItem('id') == null){
            router.push('/')
        }
        axios.get(process.env.NEXT_PUBLIC_API  + `/GetAllGroupsById?id=${sessionStorage.getItem('id')}`).then(res =>{
            SetOrgs(res.data)
        })
    }


    function getAksiesByOrganization(){
        if(sessionStorage.getItem('id') == null){
            router.push('/')
        }
        axios.get(process.env.NEXT_PUBLIC_API  + `/GetAllEventsByGroupID?id=${sessionStorage.getItem('id')}`).then(res =>{
            SetAksies (res.data)
        })
    }


    return (
        <div>
            <Head>
                <title>{orgs.name}</title>
            </Head>
          <div className='left  w-50'>
              <h3 className='middle red'>{orgs.name}</h3>
              <p className='middle'>{orgs.discription }</p>

          </div>
            <div className='right w-50'>
                <h3 className='middle red'>Aksies</h3>
                <div className>
                    {aksies.map((x) => (
                        <Aksies url={`${appUrl}/Form/Basic?idOrganization=${x.idOrganization}&IdEvent=${x.idEvent}&Redirect=${x.redirectUri}`} className='middle' name={x.eventName} description={x.eventDiscription}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
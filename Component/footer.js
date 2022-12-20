import {useEffect, useState} from "react";


export default function MyFooter({name , description,url}){

    const [year , SetYear ] = useState([])
    useEffect(() => {
        SetYear(new Date().getFullYear())
        },[]);



    return(
        <div>
            <div className='footer'>
                <p className='m-3'>Kopiereg © {year} Leeuwenveld Voortrekkers - Deel van die Voortrekkerbeweging</p>
            </div>

        </div>
    )
}
import { Navbar, Nav } from 'rsuite';
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";


export default function NavBar(props){


    const [orgs , SetOrgs ] = useState([])
    const router = useRouter();

    useEffect(() => {
        getAllOrganizations()
    }, []);

   function getAllOrganizations(){
      axios.get(process.env.NEXT_PUBLIC_API  + '/GetAllGroups').then(res =>{
          SetOrgs(res.data)
      })
   }

   function navigateToOrganizations(org){
       sessionStorage.setItem('id', org)
       router.push(`/groepe`);
       setTimeout(function(){
           router.reload()
       }, 500);
   }

   function navigateGebiedAksies(){
       router.push(`/gebiedAksies`);
   }

    function navigateKampe(){
        router.push(`/kampe`);
    }

    function navigateKomitee(){
        router.push(`/Komitee`);
    }



    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/"><img className='logo' src='/logo.png'/></Navbar.Brand>
                <Nav>
                    <Nav.Menu title="Groepe">
                        {orgs.map((x) =>(
                            <Nav.Item onClick={()=>{navigateToOrganizations(x.idOrganization)}} >{x.name}</Nav.Item>
                                ))}
                    </Nav.Menu>
                    <Nav.Item onClick={navigateGebiedAksies} >Gebied Aksies</Nav.Item>
                    <Nav.Item onClick={navigateKampe} >Kampe</Nav.Item>
                    <Nav.Item onClick={navigateKomitee} >Komitees</Nav.Item>
                </Nav>

            </Navbar>
        </div>
    )
}

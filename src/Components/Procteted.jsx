import React ,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const Protected=(props)=>
{
    const history=useHistory();
    let Cmp=props.component
    useEffect(()=>{
        if(!localStorage.getItem('email'))
        {
            history.push('./login')
        }
    })
    

    return(
        <>
        <Cmp/>

        </>
    )
}
export default Protected;
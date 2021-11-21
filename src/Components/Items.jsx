
import React ,{useState,useEffect} from 'react';
import '../index.css';
import axios from 'axios'; 
import Card from './Card';

import Header from './Header';
import sdata from './sdata';


const Items=()=>
{  
  


    const [users,setUsers]=useState([]);

   async function getData(){
        
    // const res=await axios.get('https://sales-notifierb.herokuapp.com/productapi/')
    // console.warn('************test************')
    // console.warn(res)
    // console.warn(res.data[1])
    const res=sdata;
    setUsers(res);
   

}
    useEffect(()=>{
      

        getData();
    },[]);  
      
    return (
    <>
<section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <h2 class="mb-4">Our Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
    	<div class="container">
    		<div class="row">
                        {
    users.map((val)=>{
    return  (
        <>
       

        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        type={val.type}
        link={val.link}
        price={val.price} 
        />

                            



        </>
    
       )
    }
    )}                   
     
               
    </div>
    	</div>
    </section>
                 
    
    </>)
}

export default Items;
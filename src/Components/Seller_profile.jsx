import React ,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Header from "./Header";
import sdata from './sdata';

const Seller_profile = () => {
    const history=useHistory();

    const [users,setUsers]=useState([]);

    const add=()=>{

        history.push("/add_product");
    }

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
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>Products that you are offering</b>
        </h5>
        
         
    <button onClick={add} class="btn btn-primary"> Create New Product</button>

    
      </div>


      
<div class="container-fluid">

<div class="card shadow mb-4">
 

  <div class="card-body">

    <div class="table-responsive">

      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>id</th>
            <th>Type</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller ID</th>
            <th>Image Path</th>
            
            <th>EDIT </th>
            <th>DELETE </th>
            
          </tr>
        </thead>
        <tbody>
        {
    users.map((val)=>{
    return  (
        <>
            <tr>
    
                <td>{val.title}</td>
                <td>{val.id} </td>
                <td>{val.id} </td>
                <td>{val.price} </td>
                <td>{val.id}   </td>
                <td>{val.id}   </td>
                <td>{val.image_link} </td>


                
                <td>
                <form action="edit_serviceDescription.php" method="post">
                    <input type="hidden" name="edit_id" value="<?php echo $row['serviceDesID'];   ?>"/>
                    <button  type="submit" name="submit" class="btn btn-success"> EDIT</button>
                </form>
            </td>
            <td>
                <form action="display_servicesDescription.php" method="post">
                  <input type="hidden" name="delete_id" value="<?php echo $row['serviceDesID'];   ?>"/>
                  <button type="submit" name="submit" class="btn btn-danger"> DELETE</button>
                </form>
            </td>
                           
     
        
                
            </tr>
           
            </>

)
}
)} 
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
        </>
    )
}

export default Seller_profile;
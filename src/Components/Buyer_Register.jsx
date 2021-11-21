import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Buyer_Register=()=>
{
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [image_path, setImage_path] = useState("");


	
	
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();
    const item = { name: name, email:email,password: password, phone:phone,address:address,image_path:image_path,city:city,gender:gender };

    const onSubmit = (data) => {
        setName(data.name)
        setPassword(data.password)
        setEmail(data.email)
        console.log(data.email)
       

        Submit();
        reset();
    };
  
    const Submit = async (e) => {
    console.log('***************************************************')
    console.log(item)
        const response = await fetch('https://e-market-rest-api.herokuapp.com/buyer/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        console.warn('****************' + response.status)
        if (response.status == 200) {
            history.push('/buyer_login')
        }
        else {
            console.warn("Eror login again")
            const content = await response.json();
            alert("Register Again")
            history.push('/buyer_register')

        }
        reset();
    }


    return (
        <>
    <div className="slider-area ">
     
     <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
         <div className="container">
             <div className="row">
                 <div className="col-xl-12">
                     <div className="hero-cap text-center">
                         <h2>Register as a buyer</h2>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
    <section className="login_part section_padding ">
     <div className="container">
         <div className="row align-items-center">
             <div className="col-lg-6 col-md-6">
                 <div className="login_part_text text-center">
                     <div className="login_part_text_iner">
                         <h2>Already have an account</h2>
                         <p>There are advances being made in science and technology
                             everyday, and a good example of this is the</p>
                         <a href="/buyer_login" className="btn_3">Login</a>
                     </div>
                 </div>
             </div>
             <div className="col-lg-6 col-md-6">
                 <div className="login_part_form">
                     <div className="login_part_form_iner">
                         <h3>Welcome Back ! <br/>
                             Please Register now</h3>
                         <form  onSubmit={handleSubmit(onSubmit)} className="row contact_form" action="#" method="post" novalidate="novalidate">
                                    <div  className="col-md-12 form-group p_star">
                                        <input
                                            type="text" placeholder="Name" 
                                            className={`form-control ${errors.name && "invalid"}`}
                                            {...register("name", { required: "Name is Required" })}
                                            onKeyUp={() => {
                                                trigger("name");
                                            }} onChange={(e) => setName(e.target.value)} />{errors.name && (
                                                <small className="text-danger">{errors.name.message}</small>
                                            )}
                                            
                                    </div>

                                    <div  className="col-md-12 form-group p_star">
                                        {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" required /> */}
                                        <input placeholder="Email*" 
                                            type="text"
                                            className={`form-control ${errors.email && "invalid"}`}
                                            {...register("email", {
                                                required: "Email is Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("email");
                                            }}onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errors.email && (
                                            <small className="text-danger">{errors.email.message}</small>
                                        )}

                                    
                                    </div>

                                    <div className="col-md-12 form-group p_star">
                                        <input   placeholder="Password"
                                            type="password" 
                                            className={`form-control ${errors.password && "invalid"}`}
                                            {...register("password", {
                                                required: "password is Required",
                                                pattern: {
                                                    value: /[a-z0-9_]{8,20}/,
                                                    message: "Minimum Required password is 8 and not similar to username",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("password");
                                            }}onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {errors.password && (
                                            <small className="text-danger">{errors.password.message}</small>
                                        )}
                                    </div>

                                    <div  className="col-md-12 form-group p_star">
                                            <input className='form-control' type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>


                                    <div  className="col-md-12 form-group p_star">
                                    <input className='form-control' type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>

                                    </div>

                                    <div  className="col-md-12 form-group p_star">
                                    <input className='form-control' type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)}/>

                                    </div>
                                    <div  className="col-md-12 form-group p_star">
                                    <input className='form-control' type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)}/>

                                    </div>
                                    <div  className="col-md-12 form-group p_star">
                                    <input className='form-control' type="text" placeholder="Image" value={image_path} onChange={(e) => setImage_path(e.target.value)}/>

                                    </div>

                                   
                             
                                
                             
                             <div className="col-md-12 form-group">
                                 <div className="creat_account d-flex align-items-center">
                                     <input type="checkbox" id="f-option" name="selector"/>
                                     <label for="f-option">Remember me</label>
                                 </div>
                                 <button type="submit" value="submit" className="btn_3">
                                     Register
                                 </button>
                                 <a className="lost_pass" href="#">forget password?</a>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
        </>
    )
}

export default Buyer_Register;
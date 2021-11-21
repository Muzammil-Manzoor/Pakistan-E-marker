import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Buyer_Login from "./Buyer_Login";
import Buyer_Register from "./Buyer_Register";
import Testing from "./Testing";
import Seller_login from "./Seller_login";
import Seller_register from "./Seller_register";
import Items from "./Items";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Category from "./Category";
import Buyer_profile from "./Buyer_profile";
import Seller_profile from "./Seller_profile";
import Add_product from "./Add_product";
const Index = () => {

  

    return (
        <>
            <Header />
            <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/buyer_login"><Buyer_Login /></Route>
                <Route path="/buyer_register"><Buyer_Register /></Route>
                <Route path="/seller_login"><Seller_login /></Route>
                <Route path="/seller_register"><Seller_register /></Route>
                <Route path="/buyer_profile"><Buyer_profile /></Route>
                <Route path="/seller_profile"><Seller_profile /></Route>
                <Route path="/items"><Items /></Route>
                <Route path="/cart"><Cart /></Route>
                <Route path="/contact"><Contact /></Route>
                <Route path="/about"><About /></Route>


                <Route path="/add_product"><Add_product /></Route>

                <Route path="/checkout"><Checkout /></Route>
                <Route path="/category"><Category /></Route>

                <Route path="/testing"><Testing /></Route>

                <Redirect to='/home' />

              




            </Switch>

            <Footer />


        </>
    )
}

export default Index;
import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Amplify, API}  from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import config from './aws-exports'


import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Vendas from './components/pages/Vendas';
import Users from './components/pages/Users';
import Cad_Prods from './components/pages/Cad_Prods';
import ShowProducts from './components/pages/ShowProducts';
import Product_list from './components/Product_list';

Amplify.configure(config)

function App() {
  
  return (
   
<div className = "App" >
    <Navbar />
         <Routes>
            <Route exact path="/"       element= {<Home />}></Route>
            <Route path="/vendas"       element= {<Vendas />}></Route>
            <Route path="/Cad_Prods"    element= {<Cad_Prods />}></Route>
            <Route path="/Product_list" element= {<Product_list />}></Route>
            <Route path="/Users"        element= {<Users/>}></Route>
         </Routes>
</div>
  
  );
  }

export default withAuthenticator(App);

import React from 'react';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Reset from '../Reset/Reset';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



const RoutesApp = () => {
  return (
    <BrowserRouter>
            {/* <Route exact path="/Usuario" element={<Private item={Usuario} />}/> */}
            <Routes>                                       
               <Route path="/Signup" element={<Signup/>}/>
               <Route path="/Login" element={<Login/>}/>
               <Route path="/Home" element={<Home/>}/>
               <Route path="/Reset" element={<Reset/>}/>
            </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
 

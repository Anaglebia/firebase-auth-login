import React from 'react';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Reset from '../Reset/Reset';
// import Criar from '../Criar/Criar';
import { BrowserRouter, Routes,Route} from 'react-router-dom';



const RoutesApp = () => {
 
  return (
    <BrowserRouter>
            <Routes>                                      
              <Route path="/Signup" element={<Signup/>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/Home" element={< Home />} />
              <Route path="/Reset" element={<Reset/>}/>
               {/* <Route path="/Criar" element={<Criar/>}/> */}
               
            </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
 


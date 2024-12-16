import React ,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';


import Navbar from './Navbar';

function App() {
  const [isOpen ,setOpen] =useState(false);
  const open =()=>{
     setOpen(true)
  }
  const close =()=>{
    setOpen(false)
  }
  return (
     
    <Router >
      {isOpen &&<Registration close ={close} />}
      <Routes>
      <Route path ="/" element ={<Navbar open ={open}/>}/>
         
       
        
       
      </Routes>
    </Router>

  );
}

export default App;

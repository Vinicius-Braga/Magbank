import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Payments from './components/Payments';




const App = () =>  {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar handleCreateAcc={() => setShowModal(true)}/>

      <Routes>
        <Route path='/' exact element={<Home handleClick={() => setShowModal(true)}/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/dashboard' element={ <Dashboard/> }/>
        <Route path='/dashboard/payments' element={ <Payments/>}/>
      </Routes>


      <Footer/>
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}/>
    </BrowserRouter>
  );
};

export default App;

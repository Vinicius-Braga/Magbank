import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/institutional';
import Faq from './components/Faq';

import posts from './data/Posts';


const App = () =>  (
    <div>
      <Navbar/>
      <Hero/>

      <CreditCard/>
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional/>
      <Faq/>
    </div>
  );

export default App;

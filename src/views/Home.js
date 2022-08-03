import React from 'react';
import Hero from "../components/Hero";
import CreditCard from "../components/CreditCard";
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/institutional';
import Faq from '../components/Faq';
import posts from '../data/Posts';


const Home = ({ handleClick }) =>  (
    <>
      <Hero onclick={handleClick}/>

      <CreditCard/>
      <CardList posts={posts} />
      <CenteredButton onclick={handleClick}>Abra sua conta</CenteredButton>
      <Institutional onclick={handleClick}/>
      <Faq/>
    </>
  );

export default Home;

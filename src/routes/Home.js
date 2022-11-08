import React from 'react'
import '../styles/Home.scss';

import { FaSearch } from "react-icons/fa";
import catagory from '../assets/icon_catagory.svg';
import line from '../assets/line.svg';

import Lottie from 'lottie-react';
import plant_account from '../assets/plant_account.json';

import TabBar from '../components/TabBar'
import Header from '../components/Header';

function Home() {
  return (
    <main className='main'>
    <Header />

      <main>

      <form className="Home_search_box">
        <fieldset className="Home_search_inner">
            <legend className="blind">검색창</legend>
            <FaSearch color={"#5CE5B4"} style={{marginLeft:16, marginTop:11, marginRight:20}}/>
            <input type="search" name="search" id="search"
            placeholder="Search for plant types" />
        </fieldset>
      </form>

      <div className='plant_container'>
      <a className='plant_account'><Lottie style={{display: 'block', width: 50, fontSize: '16' , margin:"0 auto" , marginBottom: "20px"}} animationData={plant_account} /></a>
      </div>
      
      <section className="Home_section">
        <div className='circle'>
          <div className='circle01'>
          <div className='circle02'>
          </div>
          </div>
          <div className='circle_bg'>
          <img src={line} style={{width: 249,height: 249 }}/>
          </div>
        </div>
        </section>

        <form className="Alarm">
          <input type="text" placeholder='00:00' required
          name="text" className="textInput"/>
          <button>Start</button>
        </form>

        <div className="chat_fa_btn">
          <a href="#">
              <img src={catagory} style={{width: 50,height: 50}}/>
          </a>
        </div>

      </main>
      <TabBar />
    </main>
  )
}

export default Home
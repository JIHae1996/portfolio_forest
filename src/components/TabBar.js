import React from 'react'
import '../styles/TabBar.scss'
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react';
import community from '../assets/community.json';
import home from '../assets/home.json';
import my_account from '../assets/my_account.json';
import news from '../assets/news.json';

function TabBar() {
  return (
    <>
    <nav className="tab_bar">
    <ul className="List">
        <li><Link to='/'>
          <Lottie style={{display: 'block', 
          width: 35 ,
          fontSize: '16' , 
          margin:"0 auto" , 
          marginBottom: "4px"}} 
          animationData={home} 
          />Home</Link></li>
        <li><Link to='/MyAccount'><Lottie style={{display: 'block', width: 35 ,fontSize: '16' , margin:"0 auto" , marginBottom: "4px"}} animationData={my_account} />My Account</Link></li>  
        <li><Link to='/News'><Lottie style={{display: 'block', width: 35 ,fontSize: '16' , margin:"0 auto" , marginBottom: "4px"}} animationData={news} />News</Link></li>
        <li><Link to='/Community'><Lottie style={{display: 'block', width: 35 ,fontSize: '16' , margin:"0 auto" , marginBottom: "4px"}} animationData={community} />Community</Link></li>
    </ul>
    </nav>
    </>
  )
}

export default TabBar
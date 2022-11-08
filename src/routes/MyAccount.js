import React from 'react'
import '../styles/MyAccount.scss'
import { BsSunFill, BsCloudSunFill, BsFillMoonFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import TabBar from '../components/TabBar'
import Header from '../components/Header';

function MyAccount() {
  return (
    <main className='myaccount_main'>
    <Header />
    <form className="profile_box">
        <div className="profile_box_inner">
            <div className='profile_box_img'></div>
            <div className='profile_Name'><a>Name</a></div>
            <a className='profile_more'><FiMoreVertical /></a>
        </div>
    </form>
    <div className='myaccount_btn'>
        <button><BsSunFill color={"rgba(48, 48, 48, 0.8)"} style={{fontSize: 25, marginTop: 2}}/></button>
        <button><BsCloudSunFill color={"rgba(48, 48, 48, 0.8)"} style={{fontSize: 25, marginTop: 0}} /> </button>
        <button><BsFillMoonFill color={"rgba(48, 48, 48, 0.8)"} style={{fontSize: 25, marginTop: 2}} /></button>
    </div>
    

    <div className='Myaccount_bg'>
        <div className='plant_bg'>
            <div className='grass_bg'></div>
            <div className='tree_bg'></div>
            
        </div>
        <div className='cloud_bg'>
            <div className='cloud_bg01'></div>
            <div className='cloud_bg02'></div>
        </div>
        <div className='sky_bg'></div>
    </div>
    <TabBar />
    </main>
  )
}

export default MyAccount
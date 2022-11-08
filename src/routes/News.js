import React from 'react'
import '../styles/News.scss'
import TabBar from '../components/TabBar'
import cardNews from '../db/News.json'

import Header from '../components/Header';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import NewsList from '../components/NewsList';

function News({id}) {
  return (
    <main className='News_main'>
    <Header />

    <div className='NewsSnS'>
        <h2>Contact Us</h2>
        <button name="google" className='News_SNSBtn01'> 
        <AiFillInstagram  color={"rgba(48, 48, 48, 0.8)"}  
        style={{marginTop:2, fontSize: 20}}/>
        </button>
        <button name="google" className='News_SNSBtn02'> 
        <AiFillFacebook  color={"rgba(48, 48, 48, 0.8)"}  
        style={{marginTop:2, fontSize: 20}}/>
        </button>
        <button name="google" className='News_SNSBtn03'> 
        <AiOutlineTwitter  color={"rgba(48, 48, 48, 0.8)"}  
        style={{marginTop:2, fontSize: 20}}/>
        </button>
      </div>

    

    <div className="News_content">

    <div className="slider__arrow left">
                <span className='arrow'
                onClick={() => {
                    document.getElementById(id).scrollLeft -= (window.innerWidth -30);
                }}>{"<"}</span>
    </div>

        <div>
        <a href='#' className='content_inner'>
        <div className='content_circle'></div>
        <span className="content_img"></span>
        <span className="content_name"><a>News</a></span>
        <span className="content_massages"><a>Here's news of a new update.<br/> Make up to five visible based on the latest version.</a></span>
       </a>
        </div>

    <div className='slider__arrow right'>
        <span className='arrow'
            onClick={() => {
                document.getElementById(id).scrollLeft += (window.innerWidth -30);
            }}>{">"}</span>
    </div>
    </div>

    <div className="other_news">
          {cardNews.map((cardNews) => (
              <NewsList
              propsimg={cardNews.image} 
              propstitle={cardNews.title}
              propsdiscription={cardNews.discription}
              />
          )).slice([1],[4])}
    </div>
    <TabBar />
    </main>
  )
}

export default News
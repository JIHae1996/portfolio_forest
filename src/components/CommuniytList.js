import React from 'react'
import '../styles/CommunityList.scss'

function CommuniytList({propsimg,propstitle, propsdiscription}) {
  return (
    <article className='Community_news_container'>
      <span className="Community_news_img"><img src={propsimg} alt={propstitle} />
      </span>
      <span className="Community_news_massages">{propsdiscription}</span>  
    </article>
  )
}

export default CommuniytList
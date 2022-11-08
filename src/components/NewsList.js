import React from 'react'
import '../styles/NewsList.scss'

function NewsList({propsimg, propstitle, propsdiscription}) {
  return (
    <article className='card_news_container'>
      <span className="card_news_img"><img src={propsimg} alt={propstitle} />
      <span className="card_news_name">{propstitle}</span>
      </span>
      <span className="card_news_massages">{propsdiscription}</span>  
    </article>
  )
}

export default NewsList
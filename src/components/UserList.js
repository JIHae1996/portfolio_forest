import React from 'react'
import '../styles/UserList.scss'

function UserList({propsimage, propsname}) {
  return (
    <article className='User_datas'>
      <span className="card_news_img"><img src={propsimage} alt={propsname} />
      <span className="card_news_name">{propsname}</span></span>
    </article>
  )
}

export default UserList
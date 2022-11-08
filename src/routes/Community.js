import '../styles/Community.scss'
import TabBar from '../components/TabBar'
import Header from '../components/Header';
import detas from '../db/detas.json'
import { AiOutlinePlus } from "react-icons/ai";
import UserList from '../components/UserList';
import CommunityList from '../components/CommuniytList';
import CommunityNews from '../db/CommunityNews.json'

function Community() {
  return (
    <main className='More_main'>
    <Header />

    <main className='main'>
    <section className="user_info">
        <div className="My_info">
            <h2 className="blind">사용자 정보</h2>
            <span className="My_info_img"></span>
            <span className="My_info_name"><a>My Name</a></span>
        </div>

        <div className='Plus_friend'>
        <AiOutlinePlus color={"#222"}
        style={{marginTop:11, marginLeft:11, fontSize:25}}/></div>

        <div className="other_user">
        <ul>
            <li>
            {detas.map((detas) => (
                <UserList
                propsimage={detas.image} 
                propsname={detas.name}
                />
            )).slice([1],[11])}
          </li>
        </ul>
        </div>
    </section>

    <section className="user_menu">
        <h2 className="user_menu_title">OTHER FRIENDS</h2>
        <ul>
            <li>
                <span className='user_menu_circle'></span>
                <span className='user_menu_img'>
                    <span className='user_menu_name'>
                    <a>Leanne Graham's<br /> garden</a>
                    </span>
                </span>
                
            </li>
            <li>
                <span className='user_menu_circle'></span>
                    <span className='user_menu_img'>
                        <span className='user_menu_name'>
                        <a>Other's<br /> garden</a>
                    </span>
                </span>
            </li>
            <li>
                <span className='user_menu_circle'></span>
                    <span className='user_menu_img'>
                        <span className='user_menu_name'>
                        <a>anastasia's<br /> garden</a>
                    </span>
                </span>
            </li>
        </ul>
    </section>

    <section className="more_app">
        <h2>COMMUNITY NEWS</h2>
        <ul>
            <div className="Community_News_lists">
            {CommunityNews.map((CommunityNews) => (
                <CommunityList
                propsimg={CommunityNews.image} 
                propsdiscription={CommunityNews.discription}
                />
            )).slice([0],[7])}
            </div>
        </ul>

    </section>
    </main>
    <TabBar />
    </main>
  )
}

export default Community
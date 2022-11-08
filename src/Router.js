import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Auth from './routes/Auth';
import Home from './routes/Home';
import MyAccount from './routes/MyAccount';
import News from './routes/News';
import Community from './routes/Community';


function AppRouter({isLoggedIn, userObj}) {

    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {isLoggedIn}
        {/* {isLoggedIn && <TabBar />} */}
        <Routes>
            {isLoggedIn ? (
            <>
            <Route path='/Login' element={<Auth userObj={userObj}/>} />
            <Route path='/' element={<Home userObj={userObj}/>} />
            <Route path='/MyAccount' element={<MyAccount userObj={userObj}/>} /> 
            <Route path='/News' element={<News userObj={userObj}/>} />
            <Route path='/Community' element={<Community userObj={userObj}/>} /> 
            </>
            ) : (
            <Route path='/' element={<Auth />}/>
            )}
            {/* 로그인이 되었을때 true면  <Route /> false면 후자 <Route /> 
            {isLoggedIn ? <Route/> : <Route />}*/}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
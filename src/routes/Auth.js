import React from 'react'
import {authService} from '../fbase';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthFrom from '../components/AuthFrom';
import "../styles/auth.scss";
import { AiOutlineGoogle, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";


function Auth() {

    const onSocialClick = (e) => {
        // console.log(e.target.name)
        const {target: {name}} = e;
        let provider
        if(name === "google"){
          provider = new GoogleAuthProvider();
        }else if(name === "github"){
          provider = new GithubAuthProvider();
        }
        const data = signInWithPopup(authService, provider);
        // console.log(data);
      }
      // setNewAccount를 이전값에서 !이전= 부정값 으로 바꾼다.

  return (
    <div className='authContainer'>
      {/* <FontAwesomeIcon icon="fa-solid fa-comment"
      color={"#1D4E8F"} size="7x" style={{marginBottom:30}}/> */}
      <AuthFrom />
      <p> Don't you have an account?</p>
      <div className='authBtns'>
        <button onClick={onSocialClick} name="google" className='authBtn'> 
        <AiOutlineGoogle  color={"rgba(48, 48, 48, 0.8)"}  
        style={{marginTop:5}}/>
        </button>
        <button onClick={onSocialClick} name="google" className='authBtn'> 
        <AiFillFacebook  color={"rgba(48, 48, 48, 0.8)"}  
        style={{marginTop:5}}/>
        </button>
        <button onClick={onSocialClick} name="google" className='authBtn'> 
        <AiOutlineTwitter  color={"rgba(48, 48, 48, 0.8)"}  
        style={{marginTop:5}}/>
        </button>
      </div>
    </div>
  )
}

export default Auth
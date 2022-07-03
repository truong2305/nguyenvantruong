/** @format */

import Logo from "../logo/Logo";
import "./header.scss";
import {NavLink} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import db from "../../firebase/firebase-config";
import {collection, getDocs, doc, updateDoc} from "firebase/firestore";
import { MobileContext } from "../../context/mobileContext";
import ig from '../../assets/images/ig.webp'
import tt from '../../assets/images/tt.png'
import fb from '../../assets/images/fb.png'


function TheHeader() {
  const [views, setViews] = useState(null)
  const mobileContext = useContext(MobileContext)
  useEffect(() => {
    const getViews = async () => {
      const data  = await getDocs(collection(db, "views"))
      const v = Number(data.docs.map( doc => doc.data().views )[0]);      
      updateDoc(doc(db, "views", "1"), { views : v + 1 })
      setViews(v + 1)
    }
    getViews()
  }, []);

  return (
    <header className={`border-end pb-3 pb-sm-4 ${mobileContext.isM ? "mobile" : "com"}`}>
      <Logo />
      <nav className={`amado-nav  d-flex flex-column justify-content-between`}>
        <ul>
          <li onClick={mobileContext.changeIsM}>
            <NavLink to='/' exact='true'>
              Home
            </NavLink>
          </li>
          <li onClick={mobileContext.changeIsM}>
            <NavLink to='blog.html'>Blog</NavLink>
          </li>
          <li onClick={mobileContext.changeIsM}>
            <NavLink to='chat.html'>Chat</NavLink>
          </li>
          <li onClick={mobileContext.changeIsM}>
            <NavLink to='profile.html'>{ mobileContext.user !== null ? "user" : 'Sign in' }</NavLink>
          </li>
        </ul>
        <div>
          <h6 className='mb-5'>Updating...</h6>
          <h6 className='follow'>Follow</h6>
          <nav className="social mt-4">
            <ul className='d-flex justify-content-between icon pe-5'>
              <li>
                <a href='https://www.facebook.com/truongnv2305' target='_blank' rel='noreferrer'>
                <img src={fb} alt="facebook" className="fb"/>
                </a>
              </li>
              <li>
                <a href='https://www.tiktok.com/@nguyenvantruong2305' target='_blank' rel='noreferrer'>
                <img src={tt} alt="tiktok" />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/nvt230500' target='_blank' rel='noreferrer'>
                  <img src={ig} alt="instagram"  />
                </a>
              </li>
            </ul>
          </nav>
          <h6 className='mt-5 mb-0'>
            { views } <span className='views'>views</span>
          </h6>
        </div>
      </nav>
    </header>
  );
}

export default TheHeader;

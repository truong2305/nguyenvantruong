/** @format */

import Logo from "../logo/Logo";
import "./header.scss";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import db from "../../firebase/firebase-config";
import {collection, getDocs, doc, updateDoc} from "firebase/firestore";

function TheHeader() {
    const [views, setViews] = useState(null)
  const viewsCol = collection(db, "views");

  useEffect(() => {
    const getViews = async () => {
      const data  = await getDocs(viewsCol)
      const v = Number(data.docs.map( doc => doc.data().views )[0]);      
      updateDoc(doc(db, "views", "1"), { views : v + 1 })
      setViews(v + 1)
    }
    getViews()
  }, []);

  return (
    <header className='border-end pb-3 pb-sm-4'>
      <Logo />
      <nav className='amado-nav  d-flex flex-column justify-content-between'>
        <ul>
          <li>
            <NavLink to='/' exact='true'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='blog.html'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='chat.html'>Chat</NavLink>
          </li>
          <li>
            <NavLink to='profile.html'>Account</NavLink>
          </li>
        </ul>
        <div>
          <h6 className='mb-5'>Updating...</h6>
          <h6 className='follow'>Follow</h6>
          <nav>
            <ul className='d-flex justify-content-between icon'>
              <li>
                <a href='https://www.facebook.com/truongnv2305' target='_blank' rel='noreferrer'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/nvt230500/' target='_blank' rel='noreferrer'>
                  <i className='fab fa-tiktok'></i>
                </a>
              </li>
              <li>
                <a href='https://www.tiktok.com/@nguyenvantruong2305' target='_blank' rel='noreferrer'>
                  <i className='fab fa-instagram'></i>
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

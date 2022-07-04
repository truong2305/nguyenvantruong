/** @format */

import "./blog.scss";
import Title from "../../common/title/Title";
import {collection, getDocs} from "firebase/firestore";
import db from "../../firebase/firebase-config";
import {useEffect, useState} from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const formatTime = time => {
    const date = new Date().getTime()
    const timestamp = new Date(time)
    const realTime = (date - time)/1000
    if(realTime < 60 ) return 'just now'
    else if(realTime < 3600) return Math.floor(realTime/60) + ' minutes ago'
    else if(realTime < 86400) return Math.floor(realTime/3600) + ' hours ago'
    else return timestamp.toUTCString().split(' ').slice(0,4).join(' ');
  } 
  const data = async () => {
    await getDocs(collection(db, "posts")).then((res) => {
      setPosts(res.docs.map((doc) => doc.data()));
    });
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <section>
      <Title title='My blog' />
      <div className='row'>
        {posts.map( post => 
          <div key={post.createdAt} className='col-12 col-sm-6 col-md-12 mb-4 col-lg-6 col-xl-4'>
            
            <div className='content'>
              <div className='content-images'>
                <img src={post.imgUrl} alt='demo ảnh' />
              </div>
              <div className='line'></div>
              <div className='d-flex justify-content-between'>
                <div>
                  <div className='content-time'>
                    <small>{formatTime(post.createdAt)}</small>
                  </div>
                  <div className='content-caption'>
                    <p>{post.content}</p>
                  </div>
                </div>
                <div>
                  <div className='content-like'>
                  <i className="fas fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Blog;

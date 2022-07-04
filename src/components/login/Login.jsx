/** @format */

import {signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import {useContext} from "react";
import {auth} from "../../firebase/firebase-config";
import {MobileContext} from "../../context/mobileContext";
import "./login.scss";
import gg from "../../assets/images/gg.png";
import fb from "../../assets/images/fb.png";
function Login() {
  const userContext = useContext(MobileContext);
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      userContext.setUser(currentUser);
    } else {
      userContext.setUser(null);
    }
  });
  const signInWithFB = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };
  const signInWithGG = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
    });
  };
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div className='login'>
      {userContext.user != null ? (
        <div className='profile'>
          <div className="avt-wrapper">
            <div className='avt'>
              <img src={userContext.user.photoURL} alt='' />
            </div>
            <div className="provider">
              <img src={userContext.user.provider === "facebook" ? fb : gg} alt={userContext.user.provider === "facebook" ? "facebook" : "google"} />
            </div>
          </div>
          <h4 className='mt-5'>{userContext.user.displayName}</h4>
          <div className='sign-out mt-4' onClick={logOut}>
            <button>Sign out</button>
          </div>
        </div>
      ) : (
        <div className='login-form '>
          <button onClick={signInWithFB} className='d-flex align-items-center mx-auto border fb'>
            <img src={fb} alt='facebook' /> Sign in with Facebook
          </button>
          <div className='my-4'>
            <small>OR</small>
          </div>
          <button onClick={signInWithGG} className='d-flex align-items-center mx-auto border'>
            <img src={gg} alt='google' /> Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;

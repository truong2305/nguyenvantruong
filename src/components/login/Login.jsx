/** @format */

import {signInWithPopup, FacebookAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import {useState} from "react";
import {auth} from "../../firebase/firebase-config";
import "./login.scss";
function Login() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });
  const signIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="login">
      {user != null ? (
        <div className="profile">
          <div className="avt">
            <img src={user.photoURL} alt='' />
          </div>
          <h4 className="mt-5">{user.displayName}</h4>
          <div className="sign-out mt-4" onClick={logOut}>
            <button>Sign out</button>
          </div>
        </div>
      ) : (
        <div className='login-form '>
          <button onClick={signIn} className='d-flex align-items-center mx-auto'>
            <i className='fab fa-facebook me-3'></i> Login with Facebook
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;

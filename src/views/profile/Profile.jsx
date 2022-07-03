
import './profile.scss'
import Title from "../../common/title/Title"
import Login from '../../components/login/Login'
import { useContext } from 'react'
import { MobileContext } from "../../context/mobileContext";

function Profile() {
    const userContext = useContext(MobileContext)

    return (
        <section>
            <Title title={ userContext.user !== null ? 'Profile' : 'Sign in' }/>
            <Login/>
        </section>
    )
}
export default Profile
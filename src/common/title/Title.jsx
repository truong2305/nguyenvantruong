import './title.scss'
import { useContext } from 'react'
import { MobileContext } from '../../context/mobileContext';

function Title(props) {
    const mobileContext = useContext(MobileContext);
    return (
        <div className='d-flex align-items-center mb-5'>
            <div className="d-block d-md-none me-5 mobile-bar" onClick={mobileContext.changeIsM}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h4 className='title'>{ props.title }</h4>
        </div>
    )
}

export default Title
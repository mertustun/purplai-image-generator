import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faHome } from '@fortawesome/free-solid-svg-icons';
import PurplaiLogo from '../assets/logo/purplai_text_logo.jpg'

const Result = ({data}) => {
    return (
        <div className='output-container'>
            <div className="title">
                <img src={PurplaiLogo} alt="" />
                <h1>Your image is ready!</h1>
            </div>
            <div className="image">
                <img src={`data:image/jpeg;base64, ${data.artifacts[0].base64}`} alt="" />
            </div>
            <div className="events">
                <a href={`data:image/jpeg;base64, ${data.artifacts[0].base64}`} className='download'
                    download="generated_by_purplai">
                    <FontAwesomeIcon icon={faDownload} className='fs-2 dark-light ' />
                </a>
                <a href="" className='home' onClick={() => window.location.reload()}>
                    <FontAwesomeIcon icon={faHome} className='fs-2 dark-light ' />
                </a>

            </div>
        </div>
    )
}

export default Result
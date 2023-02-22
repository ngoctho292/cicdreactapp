import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faSquare } from '@fortawesome/free-regular-svg-icons'
const header = () => {
    return (
        <div className="header">
            <h2>
                đây là header va iis
            </h2>
            {/* <FontAwesomeIcon icon="fa-star" /> */}
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faTicket} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSquare} />
        </div>
    )
}

export default header
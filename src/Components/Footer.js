import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBrands } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text-left">Designer et Developpé Par Guy EVariste Bade</p>
            <p className="footer-text-center">Copyright &copy; 2023</p>
            <p className="footer-text-right">
                <FontAwesomeIcon icon={faBrands} />
            </p>
        </div>
    )
}

export default Footer
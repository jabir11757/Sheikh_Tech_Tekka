import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container mt-5'>
            <div className='d-flex justify-content-center'>
                <p className='mx-5'><FaFacebook /></p>
                <p className='mx-5'><FaYoutube /></p>
                <p className='mx-5'><FaInstagram /></p>
                <p className='mx-5'><FaLinkedin /></p>
                <p className='mx-5'><FaTwitter /></p>
            </div>
            <div className='mt-2'>
                <div className='d-flex justify-content-center mt-2'>@Sheikh Tech | Developed by Owner</div>
            </div>
        </div>
    );
};

export default Footer;
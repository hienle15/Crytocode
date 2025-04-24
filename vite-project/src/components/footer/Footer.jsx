import React from 'react'
import "./Footer.scss";
import Logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return <footer className='footer'>
        <div data-aos="fade-up" className="footer_container wrapper">
            <div className="footer_col">
                <img src={Logo} alt="" />
                <p>
                Posuere ac in in nisl sed augue. Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue
                </p>
            </div>
            <div className="footer_col">
                <h3>About</h3>
                <a href="#" className="" id="">about us</a>
                <a href="#">features</a>
                <a href="#">news</a>

            </div>
            <div className="footer_col">
                <h3>Company</h3>
                <a href="#" className="" id="">Crytocode</a>
                <a href="#">Security</a>
                <a href="#">Ranking</a>

            </div>
            <div className="footer_col">
                <h3>Support</h3>
                <a href="#" className="" id="">FAQS</a>
                <a href="#">Support</a>
                <a href="#">Contact Us</a>

            </div>
            <div className="footer_col">
                <h3>Socials</h3>
                <div className="footer_icons">
                    <a href="#" className="footer_icon">
                        <FaFacebookF/>
                    </a>
                    <a href="#" className="footer_icon">
                        <FaInstagram/>
                    </a>
                    <a href="#" className="footer_icon">
                        <FaTwitter/>
                    </a>
                    <a href="#" className="footer_icon">
                        <FaLinkedin/>
                    </a>
                    <a href="#" className="footer_icon">
                        <FaYoutube/>
                    </a>
                </div>
            </div>
          
        </div>
    </footer>
}

export default Footer

import React from 'react'
import "./Status.scss"
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Status = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return <section className="status">
        <div className="status_container wrapper">
            <div className="status_left">
                <h2>Trus us due to our safe and convenient deposit</h2>
                <p>Tritique morbi scelerisque vitae. Nulla dui uitrices sed nam ligula dignissin tellus seper lorem facilisis ut. Amet ticidunt adpiscing varius maeceans adipiscing</p>
                <a href="#" className="btn">
                    KNOW MORE
                </a>
            </div>
            <div className="status_right" data-aos="fade-left">
                <img src={StatusImg} alt="status" />
            </div>
        </div>

    </section>
}

export default Status

import React from 'react'
import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Earnings = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    return <section className='earnings'>
        <div className="earnings_container wrapper">
            <div className="earnings_left" data-aos="fade-right">
                <img src={Img} alt="earnings" />
            </div>
            <div className="earnings_right" data-aos="zoom-in-up">
                <h2>Track your earnings and cryptocode made it easy </h2>
                <p>Nulla dui ultrices ligula digissim tellus, Sem semper lorem dacilitis ut amet tinicidunt adipiscing maecenas</p>
                <a href="#" className="btn">
                    GET STARTED
                </a>
            </div>
        </div>
    </section>
}

export default Earnings

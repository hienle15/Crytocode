import React from 'react';
import './Hero.scss';
import Mob from '../../assets/mob.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return <section className="hero" >
        <div className="hero_container wrapper">
            <div className="hero_left" data-aos = "fade-right">
                <img src={Mob} alt="hero" />
            </div>
            <div className="hero_right" data-aos = "zoom-in-up">
                <h1>Make easier your crypto transactions</h1>
                <p>
                    Our cryptocurrency offer fast, secure, and affordable alternative to for all of your financial needs. Join the cryptocurrency revolution to dy and take control ò our financial future. Sign up now to start using out platform for yourself.
                </p>
                <a href="#" className="btn">
                    TRY FOR FREE
                </a>
            </div>
        </div>
    </section>;
}

export default Hero

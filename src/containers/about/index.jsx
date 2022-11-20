import React from "react";
import { Animate } from "react-simple-animate";
// import { AboutImage } from "./utils";
import ImageOne from '../../images/1.jpeg';
import './styles.scss'

const About = () => {
    return (
        <Animate
            play
            duration={0.6}
            delay={0}
            start={{
                transform: 'translateY(100px)',
                opacity: 0
            }}
            end={{
                transform: 'translateY(0px)',
                opacity: 1
            }}
        >
            <section className="about">

                <div className="about__left">
                    <img src={ImageOne} alt="" />
                </div>
                <div className="about__right">
                    <div className="about__right__text">
                        <h2>Kamal<span className='lastText'> Kumar</span></h2>
                        <h4 class="about__right__text__skills">
                            <p class="about__right__text__skills__description">
                                <p class="fix">Creative
                                </p>
                                <span class="about__right__text__skills__description__wrapper">
                                    <b class="visible">Developer</b>
                                    <b class="hidden">Freelancer</b>
                                    <b class="hidden">Designer</b>
                                </span>

                            </p>
                        </h4>
                    </div>
                    <div className="about__right__text__description">
                        <p>
                            My name is <span>Kamal Kumar</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a Web Developer, I have acquired the skills and knowledge.
                        </p>
                    </div>
                    <button>
                        Learn More
                    </button>
                </div>
            </section>
        </Animate>
    )
};

export default About;
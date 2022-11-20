import React from 'react';
import './styles.scss';
import ImageOne from '../../images/img.jpg';
import { personalData, programingSkills, servicesData, languageSkills, eduTimeline } from './utils';

import HeaderText from './headerText';
import { Circle, Line } from 'rc-progress';
import { TiMediaPlay } from 'react-icons/ti'
import { BsFillCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate';
import useDocumentTitle from "../../useDocumentTitle.js"

const Resume = () => {

    useDocumentTitle("Kamal | Resume");

    return (
        <section className="resume">

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
                <div className='resume__content'>
                    <div className="resume__left">
                        <img src={ImageOne} alt="" />
                        <div className="resume__left__text">

                            <h2>Kamal<span className='lastText'> Kumar</span></h2>
                            <h4 class="resume__left__text__skills">
                                <p class="resume__left__text__skills__description">
                                    <p class="fix">Creative
                                    </p>
                                    <span class="resume__left__text__skills__description__wrapper">
                                        <b class="visible">Developer</b>
                                        <b class="hidden">Freelancer</b>
                                        <b class="hidden">Designer</b>
                                    </span>

                                </p>
                            </h4>
                            <div className="personaldata">
                                <div className='personaldata__content'>


                                    {
                                        personalData.map((item, key) => (
                                            <li key={key} >
                                                <span className="icon">
                                                    {item.icon}
                                                </span>
                                                <span className={item.class}>
                                                    {item.value}
                                                </span>

                                            </li>
                                        ))
                                    }
                                </div>
                                <a href={require("../../images/KamalResumeWeb.pdf")} rel="noopener noreferrer" download="Kamal_Resume" target='_blank'>
                                <button >
                                    Download Resume
                                </button>
</a>
                                
                            </div>

                        </div>
                    </div>
                    <div className="resume__right">

                        <div className="sticky">

                        </div>

                        <div className="aboutme">
                            <HeaderText
                                firstText="About"
                                lastText="Me"
                            />
                            <div className="resume__right__text__description">
                                <p>
                                    My name is <span>Kamal</span>. I am a Programmer and Developer, and I'm very passionate and dedicated toward Learning. I am acquiring the skills and knowledge.
                                </p>
                            </div>
                        </div>
                        <div className="services">
                            <HeaderText
                                firstText="Quality"
                                lastText="Services"
                            />
                            <div className="services__item">
                                {
                                    servicesData.map((item, key) => (
                                        <li key={key} className="services__item__wrapper">
                                            <TiMediaPlay size={17} className={"i"} />
                                            {item.services}
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="programingskills">
                            <HeaderText
                                firstText="Programming"
                                lastText="Skills"
                            />
                            <div className="programingskills__content">
                                {
                                    programingSkills.map((item, key) => (
                                        <div key={key} >
                                            <div className='text-wrapper'>
                                                <p>
                                                    {item.skillName}
                                                </p>
                                                <p>
                                                    {item.percentage}%
                                                </p>
                                            </div>
                                            <Line
                                                percent={item.percentage}
                                                strokeWidth="1"
                                                strokeColor='var(--selected-theme-main-color)'
                                                strokeLinecap="square"
                                                trailWidth="1"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="languageskills">
                            <HeaderText
                                firstText="language"
                                lastText="Skills"
                            />
                            <div className="languageskills__content">


                                <div className="languageskills__progressbar-wrapper">
                                    {
                                        languageSkills.map((item, key) => (
                                            <div  >
                                                <p>
                                                    {item.skillName}
                                                </p>
                                                {/* <p>
                                        {item.percentage}%
                                    </p> */}

                                                <li key={key} className="li" >
                                                    <Circle
                                                         d= 'path("M 50 50 m 0 -49 a 49 49 0 1 1 0 98 a 49 49 0 1 1 0 -98")'
                                                        className='circle-bar'
                                                        percent={item.percentage}
                                                        strokeWidth="2"
                                                        strokeColor='var(--selected-theme-main-color)'
                                                        trailWidth="2"
                                                        fill-opacity="0"

                                                    />
                                                    {/* <text class="CircularProgressbar-text">{item.percentage}%</text> */}
                                                </li>
                                                    <text class="CircularProgressbar-text" x="50" y="50">{item.percentage}%</text>


                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="edutimeline">
                            <HeaderText
                                firstText="Education"
                                lastText="Timeline"
                            />
                            <div className="edutimeline__content">
                                <div className="edutimeline__wrapper">
                                    {
                                        eduTimeline.map((item, key) => (
                                            <div key={key} className={item.class}>
                                                <span>
                                                    <BsFillCircleFill size={20} className="circle-fill" />
                                                    {item.timeline}
                                                </span>

                                                <h3>
                                                    {item.eduname}
                                                    <h6>
                                                        {item.edu}
                                                    </h6>
                                                </h3>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="worktimeline">
                            <HeaderText
                                firstText="Work"
                                lastText="Timeline"
                            />
                            <div className="worktimeline__content">
                                <div className="worktimeline__wrapper">
                                    {
                                        workTimeline.map((item, key) => (
                                            <div key={key} className={item.class}>
                                                <span>
                                                    <BsFillCircleFill size={20} className="circle-fill" />
                                                    {item.timeline}
                                                </span>

                                                <h3>
                                                    {item.workname}
                                                    <h6>
                                                        {item.work}
                                                    </h6>
                                                </h3>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Animate>
        </section>
    )
}

export default Resume;
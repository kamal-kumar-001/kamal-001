import React from "react";
import { Animate } from "react-simple-animate";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss'
// import { portfolioData } from "./utils";
import useDocumentTitle from "../../useDocumentTitle.js"

const Portfolio = () => {
    useDocumentTitle("Kamal | Portfolio")
    return (
        <section className="portfolio">
            <PageHeaderContent
                headerText='Creative '
                lastText='Portfolio'
            />
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

                <h1>
                    Coming Soon...
                </h1>
                {/* <div className="portfolio__content">
                    <div className="portfolio__content__card">
                        {
                            portfolioData.map((item, key) => (
                                <div key={key} className="portfolio__content__card__item">
                                    <div className="portfolio__content__card__item__img-wrapper">
                                        <p >
                                            <img src={item.img} alt="project" />
                                        </p>
                                    </div>
                                    <div className="overlay">
                                        {
                                            (
                                                <div>
                                                    <p className="projectname">
                                                        {item.projectName}
                                                    </p>
                                                    <p className="projectcatagory">
                                                        {item.catagory}
                                                    </p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div> */}
            </Animate>
        </section>
    )
};

export default Portfolio;
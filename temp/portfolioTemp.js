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
    <div className="portfolio__content">
        <div className="portfolio__content__card">
            {
                portfolioData.map((item, key) => (
                    <div key={key} className="portfolio__content__card__item">
                        <div className="portfolio__content__card__item__img-wrapper">
                            <p >
                                <img src={item.img} alt="project" />
                            </p>
                            {/* href={item.projectLink} */}
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
    </div>
</Animate>
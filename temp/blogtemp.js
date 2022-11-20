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
    <div className="blog__content">
        <div onClick={openModal} className="blog__content__card">
            {
                blogData.map(option => (
                    <div onClick={() => handleFilter(option.Id)} key={`filter${option.Id}`} className='blog__content__card__item'>
                        <div className="blog__content__card__item__img-wrapper">

                            <p >
                                <img src={option.img} alt="project" />
                            </p>
                            {/* href={item.blogLink} */}
                        </div>
                        <div className="title">
                            {
                                (
                                    <div >
                                        <p className="blogtitle">
                                            {option.blogTitle}
                                        </p>
                                        <p className="blogcatagory">
                                            {option.catagory}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className={'blogpage'}
        // onAfterOpen={afterOpenModal}
        >
            <div className="blogpage__content" id="blogpage">
                <HiX size={30} onClick={closeModal} className='x__icon' />
                {
                    filteredBlogData.map((item, key) => (

                        <div key={key} className="blogpage__content__card__item">
                            <div className="blogpage__content__card__item__img-wrapper">


                                <p >
                                    <img src={item.img} alt="project" />
                                </p>

                                {/* href={item.blogLink} */}
                            </div>
                            <div className="blogpage__title">
                                {
                                    (
                                        <div >
                                            <p className="blogpage__blogtitle">
                                                {item.blogTitle}
                                            </p>
                                            <p className="blogpage__blogcatagory">
                                                {item.catagory}
                                            </p>
                                            <p className="blogpage__blogdescription">

                                                <br />
                                                {item.blogDescription1}
                                                <br />
                                                <br />
                                                {item.blogDescription2}
                                                <br />
                                                <br />
                                                {item.blogDescription3}
                                                <br />
                                                <br />
                                                {item.blogDescription2}
                                                <br />
                                                <br />
                                                {item.blogDescription3}
                                            </p>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    ))
                }
            </div>
        </Modal>
    </div>
</Animate>
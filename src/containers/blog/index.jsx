import React, { useState } from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss'
import { blogData } from "./utils";
// import { HiX } from "react-icons/hi";
// import Modal from 'react-modal';
import { Animate } from "react-simple-animate";
import BlogModal from './blogModal'

// Modal.defaultStyles.overlay.backgroundColor = 'transparent';

const Blog = () => {

    const [openBlogModal, setOpenBlogModal] = useState(false);

    // const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    const [setFilterBlog] = useState(null);

    const handleFilter = (id) => {
        setFilterBlog(id);
    }

    return (
        <section className="blog">
            <PageHeaderContent
                headerText='Latest '
                lastText='Blog'
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
                <div className="blog__content">

                    {/* <div className="modal"> */}
                    <div>
                        {" "}
                        {openBlogModal && openBlogModal && (
                            <BlogModal
                                openBlogModal={openBlogModal}
                                setOpenBlogModal={() => setOpenBlogModal(false)}
                            />
                        )}
                        <div onClick={() => setOpenBlogModal(true)} className="blog__content__card">
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
                    </div>
                    {/* </div> */}
                </div>
            </Animate>
        </section>
    )
};

export default Blog;
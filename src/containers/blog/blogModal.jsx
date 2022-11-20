import React, { useState } from 'react'
import Modal from '../../helpers/modal'
import './styles.scss'
import { BlogPageData } from "./utils";
import { HiX } from "react-icons/hi";

const BlogModal = ({ openBlogModal, setOpenBlogModal }) => {

    const [filterBlog] = useState(null);

    const filteredBlogData = filterBlog === null ? BlogPageData :
        BlogPageData.filter(item => item.blogId === filterBlog);

    return (
        <div className="modal">
            <Modal

                open={openBlogModal}
            // isOpen={modalIsOpen}
            // onRequestClose={closeModal}
            // contentLabel="Example Modal"
            // className={'blogpage'}
            // onAfterOpen={afterOpenModal}
            >
                <div className="blogpage__content" id="blogpage__content">
                    <HiX size={30} onClick={() => setOpenBlogModal(false)} className='x__icon' />
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
    )
}
// onClick={() => setOpenBlogModal(false)}
// open={openBlogModal}
export default BlogModal;

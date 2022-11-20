{/* <Animate
        play
        duration={0.01}
        delay={3}
        start={{
          // transform: 'translateX(0vw)',
          opacity: 1
        }}
        end={{
          // transform: 'translateX(-50vw)',
          opacity: 0
        }}
      > */}
{/* <div className="homanimation">
        <Animate
          play
          duration={0.3}
          delay={2}
          start={{
            transform: 'translateX(0vw)',
            // opacity: 1
          }}
          end={{
            transform: 'translateX(-51vw)',
            // opacity: 0
            visibility: 'hidden'
          }}
        >
          <div className="left">
            <p>
              lorem haflkjsdvnav jksdvbalzkbsvlzjnvmzd,b  lkvjsd
            </p>
          </div>
        </Animate>
        <div className='line'>

        </div>
        <Animate
          play
          duration={0.3}
          delay={2}
          start={{
            transform: 'translateX(0vw)',
            // opacity: 1
          }}
          end={{
            transform: 'translateX(50vw)',
            visibility: 'hidden'
          }}
        >
          <div className="right">
            <p>right
              halksjdadks;ljvbjansmxc;hlsdaklns.mcklsdjblkjalhsdjfjksalnvs;
            </p>
          </div>
        </Animate>
      </div> */}
{/* </Animate> */ }


<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Example Modal"
  className={'blogpage'}
// onAfterOpen={afterOpenModal}
>
  <div className="blogpage__content" id="blogpage__content">
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
          {/* ani */}
<h3 class="job"><span class="cd-headline rotate-1"><span class="blc">Creative </span><span class="cd-words-wrapper"><b class="is-hidden">Designer</b><b class="is-visible">Developer</b><b class="is-hidden">Freelancer</b></span></span></h3>
        </div>

        
      ))
    }
  </div>
</Modal>



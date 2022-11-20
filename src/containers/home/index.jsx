import React from 'react';
import './styles.scss';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import {BsTelegram, BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
// import $ from 'jquery';
// import './animation'
import $ from 'jquery';
import useDocumentTitle from "../../useDocumentTitle.js"

const Home = () => {
    useDocumentTitle("Kamal | Home");

// import Home from './animation'
  
  var animationDelay = 2000;

    animateHeadline($('.cd-headline'));
    
    function animateHeadline($headlines) {
       $headlines.each(function(){
          var headline = $(this);
          //trigger animation
          setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
          //other checks here ...
       });
    }
    
    function hideWord($word) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, animationDelay);
     }
     
     function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
     }
     
     function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
     }
    
     singleLetters($('.cd-headline.letters').find('b'));
    
    function singleLetters($words) {
       $words.each(function(){
          var word = $(this),
              letters = word.text().split(''),
              selected = word.hasClass('is-visible');
          for (var i in letters) {
             letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
          }
          var newLetters = letters.join('');
          word.html(newLetters);
       });
    }

    return (

        <section className='home' id='home'>
            {/* <div className="homanimation">
                <div className="left">

                </div>
                <div className="right">

                </div>
            </div> */}
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
                <div className="home__text-wrapper">

                    <h1>
                        Kamal <span className='surname'>Kumar</span>
                    </h1>
                    <br />
                    <section class="cd-intro">
   <h3 class="cd-headline rotate-1 home__skills">
      <span class="home__skills__description"><p class="fix">Creative
                            </p>
      <span class="cd-words-wrapper home__skills__description__wrapper">
      <b class="is-visible">Developer</b>
      <b>Freelancer</b>
      <b>Designer</b>
      </span>
      </span>
   </h3>
</section>
                    {/* <h3 class="cd-headline rotate-1 home__skills">
    <span class="home__skills__description"><p class="fix">Creative
                            </p>
                            <span class="cd-words-wrapper home__skills__description__wrapper">
      <b class="is-visible">Developer</b>
      <b>Freelancer</b>
      <b>Designer</b>
    </span>
                            </span>
    
  </h3> */}
                    {/* <h3 class="home__skills">

                        <p class="home__skills__description">
                            <p class="fix">Creative
                            </p>
                            <span class="home__skills__description__wrapper">
                                <b class="visible">Developer</b>
                                <b class="hidden">Freelancer</b>
                                <b class="hidden">Designer</b>
                            </span>

                        </p>
                    </h3> */}
                </div>

                <div class="contact-me">
                    <div class="contact-me__buttons-wrapper">
                        <Link to={"/contact"}>Get in Touch</Link>
                        <Link to={"/resume"}  >View Resume</Link>
                    </div>
                    <div class="contact-me__socials-wrapper">
                        <a href={'https://www.linkedin.com/in/kamal-kumar-8b3a6b230'} target={"_blank"} rel="noopener noreferrer"><FaLinkedin size={25} /> </a>
                        <a href={'https://github.com/kamal-001'} target={"_blank"} rel="noopener noreferrer" ><BsGithub size={25} /></a>
                        <a href={'https://t.me/Kamal_Khatiwal'} target={"_blank"} rel="noopener noreferrer"><BsTelegram size={25} /></a>
                        <a href={'https://instagram.com/_kamal__001_?igshid=YmMyMTA2M2Y='} target={"_blank"} rel="noopener noreferrer"><FaInstagram size={25} /></a>
                    </div>
                </div>
            </Animate>

            
        </section>
        
    )
};

export default Home;
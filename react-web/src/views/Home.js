import React from 'react';
import '../stylesheets/Home.css'
import BG from '../assets/Starry Pink.png'
import Photo1 from '../assets/GradPhoto.jpg'
import Photo2 from '../assets/Selca.jpg'
import Photo3 from '../assets/FunWalk.jpg'
import Photo4 from '../assets/Concert.jpg'
import Photo5 from '../assets/Falls.jpg'
import Photo6 from '../assets/BlueMakeup.jpg'
import Photo7 from '../assets/Sun.jpg'
import Photo8 from '../assets/CherryBlossom.jpg'


function Home() {
  return (
    <>
    <div className='home'>
      <div>
        <img id="section1"src={BG}/>
        <p class="introTitle"> Pricilla Tran </p>
        <p class="introPara"> Design. Create. Develop. </p>
        {/* <button href="#down"> Find Out More about Me </button> */}
        <a id="scroll-btn" href="#down"></a>
      </div>
      <div id="down">
        <p id="section-2">Hi All, I am Pricilla</p>
      </div>
      {/* <div id="down">
        <img id="section2" src={Photo1}/>
        <img id="section2" src={Photo2}/>
        <img id="section2" src={Photo3}/>
        <img id="section2" src={Photo4}/>
        <img id="section2" src={Photo5}/>
        <img id="section2" src={Photo6}/>
        <img id="section2" src={Photo7}/>
        <img id="section2" src={Photo8}/>
      </div> */}
    </div>
    </>
  );
}

// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })

export default Home;
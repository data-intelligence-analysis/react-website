import React from 'react'
import './carousel.scss'
import ImgCarousel from './ImgCarousel'
import {useState, useEffect} from 'react';

import slide_1 from '../imgCarousel/slide-1.png';
import slide_2 from '../imgCarousel/slide-2.png';
import slide_3 from '../imgCarousel/slide-3.png';
import slide_4 from '../imgCarousel/slide-4.png';
import slide_5 from '../imgCarousel/slide-5.png';
import slide_6 from '../imgCarousel/slide-6.png';


const Carousel = () => {
    //create an array for the image components to show inside the carousel
    let carouselArr = [
        <ImgCarousel src = {slide_5}/>,
        <ImgCarousel src = {slide_1}/>,
        <ImgCarousel src = {slide_4}/>,
        <ImgCarousel src = {slide_6}/>
    ];
    const[x,setX] = useState(0);
    const moveLeft = () => {
        console.log(x);
        x=== 0 ? setX(-100*(carouselArr.length-1)) : setX(x+100);
    };
    const moveRight = () => {
        console.log(x)
        //carouselArr.length was used so that the input doesn't exceed the array of images
        //if the slider exceeds the elements of the carouselArr for the images return back to the slider
        x===-100*(carouselArr.length-1)?setX(0) : setX(x-100);
    };
    return (
        <div className="carousel">
            {
                carouselArr.map((item, index)=>{
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })
            }
            {/*let's add two buttons for navigating through the images*/}
            <button id = "moveLeft" onClick={moveLeft} >
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id ="moveRight" onClick={moveRight}>
                <i class="fas fa-chevron-right"></i>
            </button>

        </div>
    )
}

export default Carousel
import React from 'react'

export default function ImgCarousel({src}) {
    let ImgStyles = {
        width: 100+"%",//"100px",
        height: "auto"
    }
    return (
        <img src = {src} alt="carousel-img" width="auto" height="900vh"styles = {ImgStyles}></img>
    )
}


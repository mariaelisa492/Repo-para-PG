import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/001.jpg'
import img2 from './images/002.jpg'
import img3 from './images/003.jpg'
import { ReactComponent as FlechaDerecha } from './images/iconmonstr-arrow-63.svg'
import { ReactComponent as FlechaIzquierda } from './images/iconmonstr-arrow-64.svg'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useRef } from 'react'
import './SlideShow.css'





const SlideShow = () => {
    const slideshow = useRef(null)

    const siguiente = () => {
        if (slideshow.current.children.length > 0) {
            const primerElemento = slideshow.current.children[0]
            slideshow.current.style.transition = `300ms ease-out all`

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

            const transition = () => {
                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = `translateX(0)`

                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transition)
            }

            slideshow.current.addEventListener('transitionend', transition)


        }
    }

    const anterior = () => {
        if (slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index]
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)

            slideshow.current.style.transition = 'none'

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

            setTimeout(() => {
                slideshow.current.style.transition = `300ms ease-out all`
                slideshow.current.style.transform = `translateX(0)`
            }, 30)
        }

    }




    return (
        <div className="SlideGeneral">
            <div className="containerS">
                <div className="slideContainer" ref={slideshow}>
                    <div className="slide">
                        <img src={img1} alt="imagen1" className="slideImage" />
                    </div>
                    <div className="slide">
                            <img src={img2} alt="imagen2" className="slideImage" />
                    </div>
                    <div className="slide">
                            <img src={img3} alt="imagen3" className="slideImage" />
                    </div>
                </div>

                <div className="controls">
                    <button className="btn" onClick={anterior}><FaAngleLeft /></button>
                    <button className="btn2" onClick={siguiente}><FaAngleRight /></button>
                </div>


            </div>
        </div>
    )

}






export default SlideShow

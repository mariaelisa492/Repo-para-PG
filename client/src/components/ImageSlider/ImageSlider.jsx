import './imageslider.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';


export default function({ images }) {

  const [ current, setCurrent ] = useState(0);

  const indices = [];
  for (let i = 0; i < images.length; ++i) indices.push(i);

  // If we've got more than one image:
  function next() {
    setCurrent(current + 1);
    if (current >= images.length) setCurrent(0);
  };
  function prev() {
    setCurrent(current - 1);
    if (current < 0 ) setCurrent(images.length - 1);
  };

  return (
    <div className='slider'>
      <img src={images[current]} alt='' />

      {images.length > 1 ?
        <div className='imgNav'>
          <span className='angle' onClick={prev}><FaAngleLeft /></span>

          <div className='pager'>
            {indices.map(i => {
              return (
                i === current ?
                  <span className='circle full'></span>
                :
                  <span className='circle'></span>
              )
            })
            }
          </div>

          <span className='angle' onClick={next}><FaAngleRight /></span>
        </div>
        : <></>}
    </div>
  )
}

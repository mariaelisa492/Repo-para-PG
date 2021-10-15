import './detail.css';
import data from './data';
import SideBar from '../SideBar/SideBar';
import { FaHeart, FaStar, FaStarHalf, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const { name, description, image, stock, brand, model, price, category } = data[0];
const summary = description.split('.')[0];

export default function(props) {

  const id = props.id;


  return (
    <div className='fullview'>

      <SideBar />

      <div className='detail'>

        <div className='first'>
          <h3>{category} <b><FaHeart /></b></h3>
          <h1>{name}</h1>
          <p>{summary}.</p>
          <img src={image} alt='' />

          <div className='imgNav'>
            <span className='angle'><FaAngleLeft /></span>

            <div className='pager'>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
            </div>

            <span className='angle'><FaAngleRight /></span>
          </div>
          <div className='price'>
            <span>$ {price}</span>
          </div>
          <div className='cartBtns'>
            <span className='lbl'>Add to cart</span>
            <div className='btns'>
              <span className='remove'>-</span>
              <span className='quantity'>0</span>
              <span className='add'>+</span>
            </div>
          </div>

          <div className='rating'>
            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
          </div>
        </div>

        <div className='second'>
          <p>Brand: <strong>{brand}</strong> Model: <strong>{model}</strong></p>
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

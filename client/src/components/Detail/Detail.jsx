import './detail.css';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from '../AddToCart/Addtocart';
import Rating from '../Rating/Rating';
import ImageSlider from '../ImageSlider/ImageSlider';
import { getProductDetail } from '../../redux/actions';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";

//>> temp solution to rating
const styleRating = { 
  color: 'orange',
  width: '150px',
  fontSize: '28px',
};


export default function() {
  
  const {id} = useParams();
  const dispatch = useDispatch();
  const [initialQty, setInitialQty] = useState(0)
  const productDetail = useSelector(state => state.productDetail);
  const {image, name, description, category, _id, stock, brand, model, price} = productDetail;
  const itemsCart = useSelector(state => state.cart)
  const item = itemsCart.find(item => item._id === _id)

  useEffect(() => {
    if (item) {
      return setInitialQty(item.qty)
    }
  }, [AddToCart])
  

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getProductDetail(id))
  }, [dispatch])
	
  return (
    <div className='fullview'>
      { JSON.stringify(productDetail) !== '{}' ?
      <div className='detail'>

        <div className='first'>

          <div className='leftView'>
            <div className='topDescription'>
              <h3>{category} <b><FaHeart /></b></h3>
              <h1>{name}</h1>
              <p>{description.split('.')[0]}.</p>
            </div>

            {/* put the image slider here */}
            <div className='imageSlider'>
              <ImageSlider images={[image]} />
            </div>
          </div>

          <div className='rightView'>

            <div style={styleRating}>
              <Rating rating={9} />
            </div>
            <div className='price'>
              <span>$ {price}</span>
            </div>

            <AddToCart id={id} qty={item ? item.qty : initialQty}/>
          </div>

        </div>

        <div className='second'>
          <p>Brand: <strong>{brand}</strong> Model: <strong>{model}</strong></p>
          <p>{description}</p>
        </div>

      </div>:<Loader/>}
    </div>
  );
}

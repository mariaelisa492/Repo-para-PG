import './detail.css';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from '../AddToCart/Addtocart';
import Rating from '../Rating/Rating';
import ImageSlider from '../ImageSlider/ImageSlider';
import { getProductDetail, addToWishList } from '../../redux/actions';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { useAuth0 } from '@auth0/auth0-react'

//>> temp solution to rating
const styleRating = { 
  color: '#f4ca16',
  width: '150px',
  fontSize: '28px',
};


export default function() {
  
  const {id} = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth0()
  const productDetail = useSelector(state => state.productDetail);
  const {image, name, description, category, stock, brand, model, price} = productDetail;

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getProductDetail(id))
  }, [dispatch])


  const handleFav = (e) => {
    e.preventDefault()
    dispatch(addToWishList({email: user.email, productId: id}))
  }
	
  return (
    <div className='fullview'>
      { JSON.stringify(productDetail) !== '{}' ?
      <div className='detail'>

        <div className='first'>

          <div className='leftView'>
            <div className='topDescription'>
              <h3>{category} <b onClick={(e) => handleFav(e)}><FaHeart /></b></h3>
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

            <AddToCart id={id} stock={stock}/>
            
          </div>
          <h6 className="stock_title">Stock: {stock} units</h6>

        </div>
        {/* <p className="stock_title">Stock: {stock} units</p> */}

        <div className='second'>
          <p>Brand: <strong>{brand}</strong> Model: <strong>{model}</strong></p>
          <p>{description}</p>
        </div>

      </div>:<Loader/>}
    </div>
  );
}

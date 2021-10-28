import './detail.css';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from '../AddToCart/Addtocart';
import Rating from '../Rating/Rating';
import ImageSlider from '../ImageSlider/ImageSlider';
import { getProductDetail, addToWishList } from '../../redux/actions';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import ReviewCard from '../Review/ReviewCard';
import { useAuth0 } from '@auth0/auth0-react'
import { ReviewForm } from '../Review/ReviewForm';
import ReactModal from "react-modal";
import Modal from "../Modal/Modal";

//>> temp solution to rating
const styleRating = {
  color: '#f4ca16',
  width: '150px',
  fontSize: '28px',
};


export default function () {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0()
  const productDetail = useSelector(state => state.productDetail);

  const { image, name, description, category, _id, stock, brand, model, price, reviews } = productDetail;


  const totalRating = reviews?.map(review => review.rating).reduce((a, b) => a + b, 0)/ reviews.length;
  const ratingDefault = totalRating > 0 ? totalRating : 5;
  
  // console.log(totalRating, "EL TOTAL RATING");

  const [showPopupReview, setShowPopupReview] = useState(false)
  const [ popup, setPopup ] = useState({
       makeReview: false,
  });
  const showDialog = () => setPopup({ ...popup, makeReview: true });
  const hideDialog = () => setPopup({ ...popup, makeReview: false });

  function toggleModal() {
    setShowPopupReview(!showPopupReview);
  }





  
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getProductDetail(id))
  }, [dispatch])
  
  const handleWish = (e) => {
    e.preventDefault()
    dispatch(addToWishList({
      email: user.email,
      productId: id
    }))
  }
  
  return (
    <div className='fullview'>
      {JSON.stringify(productDetail) !== '{}' ?
        <div>
          <div className='detail'>

            <div className='first'>

              <div className='leftView'>
                <div className='topDescription'>
                  <h3>{category} <b onClick={e => handleWish(e)}><FaHeart /></b></h3>
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
                  <Rating rating={ratingDefault} />
                </div>
                <div className='price'>
                  <span>$ {price}</span>
                </div>

                <AddToCart id={id} stock={stock} />

              </div>
              <h6 className="stock_title">Stock: {stock} units</h6>

            </div>
            {/* <p className="stock_title">Stock: {stock} units</p> */}

            <div className='second'>
              <p>Brand: <strong>{brand}</strong> Model: <strong>{model}</strong></p>
              <p>{description}</p>
            </div>
          </div>

          <div >
            {isAuthenticated?<button onClick={toggleModal} className="reviewBtn"> make a review</button>:<button className="reviewBtn" onClick={showDialog}> make a review</button>}
          
          </div>

          <div>
            <ReviewCard reviews={reviews} />
          </div>

          <ReactModal isOpen={showPopupReview} className='reactModalContent' overlayClassName='reactModalOverlay'>
            <ReviewForm handleClosePopUp={toggleModal} />
          </ReactModal>

          <Modal 
        show={popup.makeReview}
        hideFunc={hideDialog}
        message="You need to be logged in to perform this action!" />

        </div> : <Loader />}
    </div>
  );
}

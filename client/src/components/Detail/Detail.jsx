import './detail.css';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from '../AddToCart/Addtocart';
import Rating from '../Rating/Rating';
import ImageSlider from '../ImageSlider/ImageSlider';
import { getProductDetail, addToWishList, deleteWishItem } from '../../redux/actions';
import { FaHeart, FaWizardsOfTheCoast } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import ReviewCard from '../Review/ReviewCard';
import { useAuth0 } from '@auth0/auth0-react'
import { ReviewForm } from '../Review/ReviewForm';
import ReactModal from "react-modal";
import Modal from "../Modal/Modal";
import { getWishlist } from '../../redux/actions';

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
  const wish = useSelector(state => state.wishList)

  const { image, name, description, category, _id, stock, brand, model, price, reviews } = productDetail;


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
    dispatch(getWishlist(user.email))
    dispatch(getProductDetail(id))
  }, [dispatch])
  
  const wishess = wish.includes(id)
  const handleWish = (e) => {
    e.preventDefault()
  
    if(!wishess){
      dispatch(addToWishList({
        email: user.email,
        productId: id
      }))
      console.log('!!!!!!!! ADDDDDDDDD WISH', wish )
    } else {
      dispatch(deleteWishItem( id,user.email))
      console.log('!!!!!!!! deLETE WISH', wish )
    }
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
                  <Rating rating={9} />
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

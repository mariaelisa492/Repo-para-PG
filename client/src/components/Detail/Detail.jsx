import './detail.css';
import { useEffect, useState   } from 'react'
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
import { Questions } from '../Questions/Questions';
import { QuestionForm } from '../QuestionForm/QuestionForm';
import ReactModal from 'react-modal';

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
  const [modalQuestionOpen, setModalQuestionOpen] = useState(false);

  function handleModalQuestion() {
    setModalQuestionOpen(!modalQuestionOpen);
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getProductDetail(id))
  }, [dispatch])

  return (
    <div className='fullview'>
      {JSON.stringify(productDetail) !== '{}' ?
        <div>
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

          <div>
            <ReviewCard reviews={reviews} />
          </div>
          <div className='questionFormB'>
            <button className='questionFormButtonOpen' onClick={handleModalQuestion}>Ask a Question</button>
          </div>
          {isAuthenticated ?
          <ReactModal isOpen={modalQuestionOpen} className='modalQuestionForm' overlayClassName='reactModalOverlay' >
            <QuestionForm productId={_id} nickname={user?.nickname} close={handleModalQuestion} />
          </ReactModal>
          : null
            }
        <div className='questionsInDetails'>
          <Questions productId={_id}/>
        </div>

        </div> : <Loader />}
    </div>
  );
}

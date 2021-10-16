import './detail.css';
import data from './data';
import AddToCart from '../AddToCart/Addtocart';
import Rating from '../Rating/Rating';
import ImageSlider from '../ImageSlider/ImageSlider';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

//>> Fake data for testing and mockup
const { name, description, image, stock, brand, model, price, category, _id } = data[0];
const summary = description.split('.')[0];

export default function(props) {

  const id = useParams();
  // Still using fake data (above)
  // use this id and and action to get the REAL data!

  return (
    <div className='fullview'>

      <div className='detail'>

        <div className='first'>
          <h3>{category} <b><FaHeart /></b></h3>
          <h1>{name}</h1>
          <p>{summary}.</p>

          {/* put the image slider here */}
          <ImageSlider images={[image]} />

          <div className='price'>
            <span>$ {price}</span>
          </div>

          <AddToCart id={id} />

          <Rating rating={9} />

        </div>

        <div className='second'>
          <p>Brand: <strong>{brand}</strong> Model: <strong>{model}</strong></p>
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

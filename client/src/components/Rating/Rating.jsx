import './rating.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';


export default function({ rating }) {
  // rating is a number from 0 to 100
  // we have five start or I should say 10 half stars!

  const stars = [];
  const half = rating % 2;
  const full = (rating - rating % 2) / 2;
  for (let i = 0; i < full; ++i) stars.push(<FaStar />);
  if (half > 0) stars.push(<FaStarHalf />);

  return (
    <div className='rating'>
      <span>{stars}</span>
    </div>
  )
}

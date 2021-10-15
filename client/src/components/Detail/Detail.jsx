import './detail.css';
import data from './data';

const { name, description, image, stock, brand, model, price, category } = data[0];
const summary = description.split('.')[0];

export default function(props) {

  return (
    <div className='detail'>

      <div className='first'>
        <h3>{category}</h3>
        <h1>{name}</h1>
        <p>{summary}</p>
        <img src={image} alt='' />

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
      </div>

      <div className='second'>
        <p>Brand: {brand} Model: {model}</p>
        <hr />
        <p>{description}</p>
      </div>

    </div>
  );
}

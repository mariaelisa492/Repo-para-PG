import './filterProducts.css';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByPriceRange, reset_filter } from '../../redux/actions';


export default function(props) {

  const dispatch = useDispatch();
  const isFilterActive = useSelector((state) => state.priceRange);

  const filters = [
    'Most relevant',
    'up to $500',
    '$500 to $1,500',
    '$1,500 to $3,000',
    '$3,000 to $5,000',
    '$5,000 and up',
  ];

  const [ order, setOrder ] = useState({
    filterBy: filters[0],
    order: 'asc',
    apply: false,
    show: false,
  });

  useEffect(() => {
    if (!isFilterActive)
      setOrder({ ...order, filterBy: filters[0] })
  }, [isFilterActive]);

  const setFilter = (f) => setOrder({ ...order, filterBy: f });

  const toggle = () => setOrder({ ...order, show: !order.show });

  const doFilter = () => {
    toggle();
    switch (order.filterBy) {
      case 'Most relevant':
        dispatch(reset_filter());
        break;
      case 'up to $500':
        dispatch(filterProductsByPriceRange(0, 500));
        break;
      case '$500 to $1,500':
        dispatch(filterProductsByPriceRange(500, 1500));
        break;
      case '$1,500 to $3,000':
        dispatch(filterProductsByPriceRange(1500, 3000));
        break;
      case '$3,000 to $5,000':
        dispatch(filterProductsByPriceRange(3000, 5000));
        break;
      case '$5,000 and up':
        dispatch(filterProductsByPriceRange(5000, 1000000));
        break;
      default:
        break;
    };
  };


  return (
    <div className='filterProducts'>
      <div className='filterTitle'>Order by: </div>
      <div className='filterSelector'>
        <div onClick={toggle} className='filterName'>{order.filterBy} <FaAngleDown className='angleDown'/></div>
        <ul className={'filterList ' + (order.show ? 'showList' : 'hideList')} >
          {filters.map(f => {
            return <li key={f} onClick={() => setFilter(f)}>
                {f} <FaCheck className={order.filterBy === f ? 'fActive' : 'fInactive'}/>
              </li>
          })}
          <li><span className='applyFilter' onClick={doFilter}>Apply</span></li>
        </ul>
      </div>
    </div>
  );
}

import './filterProducts.css';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  filterProductsByPriceRange,
  getProductsByPriceAsc,
  getProductsByPriceDesc,
  resetProductsByPrice,
  reset_filter } from '../../redux/actions';


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
    current: 'asc',
    active: false,
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
    setOrder({ ...order, show: false });
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

  const resetFilter = () => {
    setOrder({ 
      ...order, 
      filterBy: filters[0],
      current: 'asc',
      active: false,
      apply: false,
      show: false,
    });
    dispatch(resetProductsByPrice());
  };


  const toggleOrder = () => {
    if (!order.active) {
      setOrder({ ...order, active: true });
    } else if (order.current === 'asc') {
      setOrder({ ...order, current: 'desc' });
    } else {
      setOrder({ ...order, active: false, current: 'asc' });
    }
  };

  useEffect(() => {
    if (order.active) {
      if (order.current === 'asc') {
        dispatch(getProductsByPriceAsc());
      } else {
        dispatch(getProductsByPriceDesc());
      }
    }   
  }, [order.current, order.active]);


  return (
    <div className='filterProducts'>
      <div className='filterTitle'>Filter by: </div>
      <div className='filterSelector'>
        <div className='filterName'><span onClick={toggle}>{order.filterBy} </span>
          <div 
            className={'order ' + (order.active ? 'Oactive' : 'Oinactive')}
            onClick={toggleOrder} >
            <FaAngleDown className={order.current === 'asc' ? 'angleDown' : 'angleUp'} />
          </div>
        </div>
        <ul className={'filterList ' + (order.show ? 'showList' : 'hideList')} >
          {filters.map(f => {
            return <li key={f} onClick={() => setFilter(f)}>
                {f} <FaCheck className={order.filterBy === f ? 'fActive' : 'fInactive'}/>
              </li>
          })}
          <li>
            <span className='clearFilter' onClick={resetFilter}>Clear</span>
            <span className='applyFilter' onClick={doFilter}>Apply</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

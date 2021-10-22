import './filterProducts.css';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import { useState } from 'react';


export default function(props) {

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

  const setFilter = (f) => setOrder({ ...order, filterBy: f });
  const toggle = () => setOrder({ ...order, show: !order.show });


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
          <li><span className='applyFilter' onClick={toggle}>Apply</span></li>
        </ul>
      </div>
    </div>
  );
}

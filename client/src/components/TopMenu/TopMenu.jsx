import './topmenu.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';


export default function({categories}) {

  const [ active, setActive ] = useState('');
  const dispatch = useDispatch()

  // Pongan aqui la funcion de filtrado
  function filterFunction(e) {
    const category = e.target.innerText;
    dispatch(filterByCategory(category));
    setActive('');
    console.log(category, 'SubCategory Recieved on filter function (sideBar)');
  }

  function toggle(e) {
    const name = e.target.innerText;
    if (name === active) setActive('');
    else setActive(e.target.innerText);
  }

  return (
    <div className='topMenuBar'>
      {/*
      <div className={'subCategories ' + (showSub ? 'subVisible' : 'subHidden')}>
        <div>
          {submenu}
        </div>
      </div>
      */}

      <div className='mainCategories'>
          {Object.keys(categories).map(c => {
            return (
              <div>
                <div 
                  onMouseEnter={() => setActive(c)} 
                  className={'topCat ' + (c === active ? 'active' : '')}>
                  {c}
                </div>
                <ul 
                  className={'subCat ' + (c === active ? 'subActive' : 'subInactive')}
                  onMouseLeave={() => setActive('')}
                >
                  {categories[c].map(sc => {
                    return (
                      <li key={sc}>
                        <span onClick={filterFunction}>{sc}</span>
                      </li>
                    )}
                  )}
                </ul>
              </div>
            )}
          )}
      </div>

    </div>
  );
}

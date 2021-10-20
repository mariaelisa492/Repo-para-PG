import './topmenu.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';


export default function({categories}) {

  console.log(categories, 'sidebarCategories')
//export default function SideBar({ categories }) {

  const [ hidden, setHidden ] = useState(true);
  const [ submenu, setSubmenu ] = useState(<></>);
  const [ showSub, setShowSub ] = useState(false);
  const [ active, setActive ] = useState('');
  const dispatch = useDispatch()

  // Pongan aqui la funcion de filtrado
  function filterFunction(e) {
    const category = e.target.innerText;
    dispatch(filterByCategory(category));
    console.log(category, 'SubCategory Recieved on filter function (sideBar)');
  }

  function show() {
    setHidden(false);
  }

  function hide() {
    setHidden(true);
    setShowSub(false);
    setActive('');
  }

  function toggle(e) {
    
    setSubmenu(<ul>{categories[e.target.innerText].map(c => {
      return (
        <li key={c}>
          <span onClick={filterFunction}>{c}</span>
        </li>
      )}
    )}</ul>);
    setShowSub(true);
    setActive(e.target.innerText);
  }

  return (
    <div className='topMenuBar'>
      <div className='subCategories'>
        <div>
          {submenu}
        </div>
      </div>

      <div className='mainCategories'>
          {Object.keys(categories).map(c => {
            return (
              <div onClick={toggle} className={'topCat ' + (c === active ? 'active' : '')}>{c}</div>)
          })}
      </div>

    </div>
  );
}

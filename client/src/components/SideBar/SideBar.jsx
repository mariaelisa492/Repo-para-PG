import './sideBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';


export default function SideBar({categories}) {

  //console.log(categories, 'sidebarCategories')
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

  /*
  return (
    <div className='leftCol'>
      <div className={'sidebar' + (hidden ? ' hidden' : ' visible')}>
        <div id='menu' className='categories'>
          <ul>
            {Object.keys(categories).map(c => {
              return (<li key={c}>
                <span onClick={toggle} className={c === active ? 'active' : ''}>{c}</span>
              </li>)
            })}
          </ul>
        </div>

          <div className={'submenu ' + (showSub ? 'fat' : 'thin')}>
            <div>
              {submenu}
            </div>
          </div>

        <div className='openclose'>
          <span
            className={'menuopen ' + (hidden ? 'block' : 'none')}
            onClick={show}><FaBars /></span>
          <span
            className={'menuclose ' + (hidden ? 'none' : 'block')}
            onClick={hide}><FaTimes /></span>
        </div>
      </div>
    </div>
  )
  */
  return (
    <div className='topMenu'>
      <p>the top menu goes here</p>
    </div>
  );
}

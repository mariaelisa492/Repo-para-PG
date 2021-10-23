// version ligeramente modificada del menu lateral
import './dropDownMenu.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';
import { categories } from '../../components/Categories/categoriesExport';


// Reemplaza esta linea por la de abajo y recibe categories por props!
export default function ({ showMenu, showDropDownMenu }) {
//export default function SideBar({ categories }) {

  const [ active, setActive ] = useState({ name: '' });
  const dispatch = useDispatch()

  // Pongan aqui la funcion de filtrado
  function filterFunction(e) {
    const category = e.target.innerText;
    dispatch(filterByCategory(category));
    hideAll(false);
    console.log(category, 'SubCategory Recieved on filter function (sideBar)');
  }

  function hideAll(firstTime) {
    setActive({ ...active, name: ''});
    if (!firstTime) showDropDownMenu();
  }

  useEffect(() => hideAll(true), [showMenu]);


  function toggle(e) {
    const name = e.target.innerText;
    if (name === active.name) setActive({ ...active, name: '' });
    else setActive({ ...active, name: e.target.innerText});
  }


  return (
    <div className={'dropDown' + (showMenu ? ' ddVisible' : ' ddHidden')} >
      <div >
        <div id='menu' className='ddCategories'>
          <ul>
            {Object.keys(categories).map(c => {
              return (<li onClick={toggle}>
                <span className={c === active.name ? 'ddActive' : ''}>{c}</span>
                <ul className={'ddSubcategories ' + (c === active.name ? '' : 'smHidden')}>
                  {categories[c].map(sc => <li onClick={filterFunction}>{sc}</li>)}
                </ul>
              </li>)
            })}
          </ul>
        </div>

        <div className='ddOpenclose'>
          <span
            className={'ddMenuclose'}
            onClick={() => hideAll(false)}><FaTimes /></span>
        </div>
      </div>
    </div>
  )
}

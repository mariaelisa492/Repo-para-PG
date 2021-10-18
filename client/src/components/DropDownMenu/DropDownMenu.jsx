// version ligeramente modificada del menu lateral
//
import './dropDownMenu.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';


const categories = {
  "Guitars": [
    "Acoustic guitars",
    "Electric guitars",
    "Nylon/Classical",
  ],
  "Keyboards": [
    "Electronic keyboards",
    "Synthesizers",
    "Electric pianos",
    "Acoustic pianos",
    "Grand pianos",
  ],
  "Percusion": [
    "Acoustic drumkits",
    "Electronic drumkits",
    "Other",
  ],
  "Bass guitars": [
    "Acoustic bass",
    "Electric bass",
  ],
  "Pianos": [
    "Grand piano",
    "Vertical piano",
  ],
  "Mics": [
    "Dinamic",
    "Cardioid",
    "Directional",
  ],
};

// Reemplaza esta linea por la de abajo y recibe categories por props!
export default function ({ showMenu, showDropDownMenu }) {
//export default function SideBar({ categories }) {
  const ctgr = Object.keys(categories);

  const [ hidden, setHidden ] = useState(showMenu);
  const [ subMenu, setSubMenu ] = useState([]);
  const [ active, setActive ] = useState('');

  // Pongan aqui la funcion de filtrado
  function filterFunction(e) {
    const category = e.target.innerText;
    // dispatch( algo con category );
    console.log(category);
  }

  function hideAll(firstTime) {
    setHidden(true);
    setSubMenu([ ...ctgr ]);
    setActive('');
    if (!firstTime) showDropDownMenu();
  }

  useEffect(() => hideAll(true), [showMenu]);

  function toggle(e) {
    const sub = e.target.innerHTML;
    console.log(sub);
    if (subMenu.includes(sub)) {
      setSubMenu(subMenu.filter(sm => sm !== sub));
    } else {
      setSubMenu([ ...subMenu, sub ]);
    }
    console.log(subMenu);
  }


  return (
    <div className={'dropDown' + (showMenu ? ' ddVisible' : ' ddHidden')} >
      <div >
        <div id='menu' className='ddCategories'>
          <ul>
            {Object.keys(categories).map(c => {
              return (<li onClick={toggle}>
                <span className={c === active ? 'ddActive' : ''}>{c}</span>
                <ul className={'ddSubcategories ' + (subMenu.includes(c) ? 'smHidden' : 'sbHidden')}>
                  {categories[c].map(sc => <li>{sc}</li>)}
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

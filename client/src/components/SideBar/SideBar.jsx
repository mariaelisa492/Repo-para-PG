import './sideBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


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
export default function SideBar(props) {
//export default function SideBar({ categories }) {

  const [ hidden, setHidden ] = useState(true);
  const [ submenu, setSubmenu ] = useState(<></>);
  const [ showSub, setShowSub ] = useState(false);
  const [ active, setActive ] = useState('');

  // Pongan aqui la funcion de filtrado
  function filterFunction(e) {
    const category = e.target.innerText;
    // dispatch( algo con category );
    console.log(category);
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
        <li>
          <span onClick={filterFunction}>{c}</span>
        </li>
      )}
    )}</ul>);
    setShowSub(true);
    setActive(e.target.innerText);
  }

  return (
    <div className='leftCol'>
      <div className={'sidebar' + (hidden ? ' hidden' : ' visible')}>
        <div id='menu' className='categories'>
          <ul>
            {Object.keys(categories).map(c => {
              return (<li>
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
}

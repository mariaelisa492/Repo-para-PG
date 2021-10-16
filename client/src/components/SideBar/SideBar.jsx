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

export default function SideBar(props) {

  const [ hidden, setHidden ] = useState(true);
  const [ submenu, setSubmenu ] = useState(<>hello</>);

  function show() {
    setHidden(false);
  }

  function hide() {
    setHidden(true);
  }

  function toggle(e) {
    setSubmenu(<ul>{categories[e.target.innerText].map(c => <li>{c}</li>)}</ul>);
  }

  return (
    <div className={'sidebar' + (hidden ? ' hidden' : ' visible')}>
      <div id='menu' className='categories'>
        <ul>
          {Object.keys(categories).map(c => {
            return (<li>
              <span onClick={toggle}>{c}</span>
            </li>)
          })}
        </ul>
      </div>

      <div className='openclose'>
        <span
          className={'menuopen ' + (hidden ? 'block' : 'none')}
          onClick={show}><FaBars /></span>
        <span
          className={'menuclose ' + (hidden ? 'none' : 'block')}
          onClick={hide}><FaTimes /></span>
      </div>

      <div className='submenu'>
        <div>
          {submenu}
        </div>
      </div>
    </div>
  )
}

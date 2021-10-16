import './sideBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


const categories = {
  "Guitars": [
    "Acoustic guitars",
    "Electric guitars",
    "Nylon/Classical",
  ],
  "Piano/Keyboards": [
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
};

export default function SideBar(props) {

  const [ hidden, setHidden ] = useState(true);

  function show() {
    setHidden(false);
  }

  function hide() {
    setHidden(true);
  }

  return (
    <div className={'sidebar' + (hidden ? ' hidden' : ' visible')}>
      <div id='menu' className='categories'>
        <ul>
          <li>Guitars</li>
          <li>Bass</li>
          <li>Keyboards</li>
          <li>Percusion</li>
          <li>Pianos</li>
          <li>Wind</li>
          <li>Strings</li>
          <li>Wood</li>
          <li>Other</li>
          <li>Accesories</li>
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

    </div>
  )
}

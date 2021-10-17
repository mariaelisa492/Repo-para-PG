import './sideBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';


export default function SideBar({categories}) {

  console.log(categories, 'sidebarCategories')

  const [ hidden, setHidden ] = useState(true);
  const [ submenu, setSubmenu ] = useState(<></>);
  const dispatch = useDispatch()

  function show() {
    setHidden(false);
  }

  function hide() {
    setHidden(true);
  }

  
    function handleClick(event){
      event.preventDefault()
      console.log(event.target.innerText, 'value recieved from event on handleClick(subMenu)')
      dispatch(filterByCategory(event.target.innerText))
    }

  function toggle(e) {
    setSubmenu(<ul>{
      categories[e.target.innerText].map(c =>{
        console.log(c,'|||| mappedInnerTextFromCategories ||||')
        return(
          <li onClick={handleClick} >{c}</li>
            )
          }
        )
      }
      </ul>
    );
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

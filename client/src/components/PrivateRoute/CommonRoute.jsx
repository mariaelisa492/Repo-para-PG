import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import { searchUserInDb } from '../../redux/actions';

const CommonRoute = ({ component: Component, rest }) => {

  const dispatch = useDispatch()
  const { user } = useAuth0();

  const userRedux = useSelector(state => state.user)
  const role = userRedux.user ? userRedux.user[0]?.role : null

  useEffect(() => {
    dispatch(searchUserInDb(user?.email))
  }, [user])


  return (
    <Route {...rest}> {role !== "ROLE_BANNED"
      ? <Component />
      : <div style={{
        backgroundColor:"#020000"
        ,
        color: '#6f6f6f',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
      }}>
        <h1 style={{
          padding: '200px 0px 50px',
          color: '#ff0000',
          textAlign: 'center',
          fontWeight: 'normal',
        }}>You are BANNED!</h1>
        <NavLink to='/' >
          <button style={{
            width: '200px',
            backgroundColor: '#ff0000',
            color: 'black',
            cursor: 'pointer',
            borderRadius: '8px',
            margin: 'auto',
            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
          }}>Back</button>
        </NavLink>
      </div>} </Route>
  )
};

export default CommonRoute;
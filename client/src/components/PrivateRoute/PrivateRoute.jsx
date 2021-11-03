import { Route, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import { searchUserInDb } from '../../redux/actions';


const PrivateRoute = ({ component:Component, rest}) => {

    const dispatch = useDispatch()
    const { user } = useAuth0();

    const userRedux = useSelector(state => state.user)
    console.log('!!!!!!!!!!!!!! USER REDUx', userRedux)
    const role = userRedux.user ? userRedux.user[0]?.role : null
    console.log('!!!!!!!!!!!!! SOY ROLE', {...rest})
    
     useEffect(() => {
     dispatch(searchUserInDb(user?.email))
    }, [user] ) 

  console.log('fafafa: ',  userRedux);
    return (
        <Route {...rest}> {role 
          ? <Component /> 
          : <div style={{
            backgroundColor: '#d0d0d0',
            color: '#6f6f6f',
            height: '100vh',
            width: '100vw',
            textAlign: 'center',
            }}>
            <h5 style={{
              padding: '200px 0px 50px',
              textAlign: 'center',
              fontWeight: 'normal',
            }}>You are not allowed to perform this action</h5>
            <NavLink to='/' >
              <button style={{
                width: '200px',
                backgroundColor: 'orange',
                color: 'black',
                cursor: 'pointer',
                borderRadius: '8px',
                margin: 'auto',
                boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
              }}>Back</button>
            </NavLink>
            </div> } </Route>
    )
};

export default PrivateRoute;

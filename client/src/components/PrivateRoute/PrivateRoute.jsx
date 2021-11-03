import { Route, Redirect } from 'react-router'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import { searchUserInDb } from '../../redux/actions';


const PrivateRoute = ({ component:Component, rest}) => {

    const dispatch = useDispatch()
    
    const userRedux = useSelector(state => state.user)
    console.log('!!!!!!!!!!!!!! USER REDUx', userRedux)
    const role = userRedux.user ? userRedux.user[0]?.role : null
    console.log('!!!!!!!!!!!!! SOY ROLE', {...rest})
    const {user} = useAuth0();
    
     useEffect(() => {
     dispatch(searchUserInDb(user?.email))
    }, [user] ) 

    return (
        <Route {...rest}> {role ? <Component /> : <h1>Get out</h1> } </Route>
    )
};

export default PrivateRoute;

import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import { searchUserInDb } from '../../redux/actions';
import { UserBanned } from '../Banned/UserBanned';

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
      : <UserBanned/>} </Route>
  )
};

export default CommonRoute;
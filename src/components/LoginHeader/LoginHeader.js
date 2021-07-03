import React,  { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/userActions';
import { setToken } from '../../actions/tokenActions';
import { connect, useDispatch } from 'react-redux';
import './LoginHeader.css';

const LoginHeader = ({user, loading}) => {

return (
  <div>
    <div className='login-header' data-test='login-head'>
          <p>{user}</p> 
    </div>
    }
    </div>
    )
  }

export default LoginHeader;
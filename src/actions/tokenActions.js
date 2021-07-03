import { 
  SET_TOKEN
} from './actionTypes'


export const setToken = (token) => {

  return ({
    type: 'SET_TOKEN',
    token: token
  });
};

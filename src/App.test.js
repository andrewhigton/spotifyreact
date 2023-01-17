import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from '../test/testUtils';
import App from './App';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setToken as mockSetToken } from "./actions/tokenActions";
import { fetchFeatured as mockFetchFeatured } from "./actions/browseActions";

jest.mock('./actions/browseActions');
jest.mock('./actions/tokenActions');


Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const setup = (initialState={
      browse: {},
  user: {},
  token: {},
  search: {},
  songs: {},
  albums: {},
  artists: {},
  playlist: {},
  sound: {},
  ui: {}  
}) => {
  const store = mockStore(initialState)
  const wrapper = mount(<Provider store={store}><App /></Provider> );
} 

test('App renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1);
});

test('Login header renders without error', () => {
  const wrapper = setup();
  const loginComponent = findByTestAttr(wrapper, 'login-head')
  expect(loginComponent.length).toBe(1);
});

test('MainHeader header renders without error', () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, 'main-head')
  expect(headerComponent.length).toBe(1);
});

test('Footer renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'footer-component')
  expect(component.length).toBe(1);
});

const setup1 = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};



describe('setToken', () => {
  
    let wrapper;
    
    beforeEach(() => {
      mockSetToken.mockClear();    
    })


  test.skip('set token on app mount', () => {
    const wrapper = setup1();
    expect(mockSetToken).toHaveBeenCalledTimes(1);
  })

})



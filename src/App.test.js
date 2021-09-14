import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from '../test/testUtils';
import App from './App';
// import hookActions from './actions/hookActions';
jest.mock('./actions/browseActions');
import { fetchFeatured as mockFetchFeatured } from "./actions/browseActions";


Enzyme.configure({ adapter: new EnzymeAdapter() });


const mockGetSecretWord = jest.fn();

// const setUp = () => {
// 	return shallow(<App />)
// }

// const setup = () => {
//   const store = storeFactory();
//   return mount(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };


const setUp = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<App store={store} /> );
} 

test.skip('App renders without error', () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1);
  // expect(App).toHaveLength(1);
});

// test('Login header renders without error', () => {
//   const wrapper = setup();
//   const loginComponent = findByTestAttr(wrapper, 'login-head')
//   expect(loginComponent.length).toBe(1);
// });

// test('MainHeader header renders without error', () => {
//   const wrapper = setup();
//   const headerComponent = findByTestAttr(wrapper, 'main-head')
//   expect(headerComponent.length).toBe(1);
// });

// test('Footer renders without error', () => {
//   const wrapper = setUp();
//   const component = findByTestAttr(wrapper, 'footer-component')
//   expect(component.length).toBe(1);
// });



// describe('fetchFeatured calls', () => {
	
//      beforeEach(() => {
//      mockFetchFeatured.mockClear();
//    })

//   test('fetchFeatured gets called on App mount', () => {
// 		const wrapper = setup();
// 		//check to see if secret word was called
	
//     expect(mockFetchFeatured).toHaveBeenCalled();
// 		// expect(mockFetchFeatured).toStrictEqual({});
// 	})
// 	test('fetchFeatured updates on App update', () => {
// 		const wrapper = setup();
// 		mockFetchFeatured.mockClear();
// 		//wrapper.update doesn't trigger update
// 		wrapper.setProps();

// 		expect(mockFetchFeatured).not.toHaveBeenCalled();
// 	})
// })


// describe('secretWord is not null', () => {
	
// 	let wrapper;
//   	beforeEach(() => {
//   		wrapper = setUp('party');
//   	})


// 	test('renders app when secret word is not null', () => {
// 		const appComponent = findByTestAttr(wrapper, 'component-app');
// 		expect(appComponent.exists()).toBe(true);
	
// 	})
// 	test('does not render spinner when secretWord is not null', () => {
// 		const spinnerComponent = findByTestAttr(wrapper, 'spinner');
// 		expect(spinnerComponent.exists()).toBe(false)

// 	})
// })

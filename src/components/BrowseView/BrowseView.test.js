import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtils';
import { Provider } from 'react-redux';

import BrowseView from './BrowseView';

// mock entire module for destructuring useState on import //////
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const setup = (initialState={}) => {
  
  

  const store = storeFactory();
  return mount(<Provider store={store}><BrowseView /></Provider>);
}

describe('render', () => {

    let featured;
    let wrapper;
    let browseItem = {
      browseItem: featured
    }
    
    beforeEach(() => {
      wrapper = setup({ item: browseItem });
    })

    test('Browse renders without error', () => {
      const browseComponent = findByTestAttr(wrapper, 'component-input');
      expect(browseComponent.length).toBe(1);
    });
    // test('input box displays', () => {
    //   const inputBox = findByTestAttr(wrapper, 'input-box');
    //   expect(inputBox.exists()).toBe(true);
    // });
    // test('submit button displays', () => {
    //   const submitButton = findByTestAttr(wrapper, 'submit-button');
    //   expect(submitButton.exists()).toBe(true);
    // });
  });
  // describe('success is true', () => {
  //   let wrapper;
  //   beforeEach(() => {
  //     wrapper = setup({ success: true });
  //   })
  //   test('Input renders without error', () => {
  //     const inputComponent = findByTestAttr(wrapper, 'component-input');
  //     expect(inputComponent.length).toBe(1);
  //   });
  //   test('input box does not display', () => {
  //     const inputBox = findByTestAttr(wrapper, 'input-box');
  //     expect(inputBox.exists()).toBe(false);
  //   });
  //   test('submit button does not display', () => {
  //     const submitButton = findByTestAttr(wrapper, 'submit-button');
  //     expect(submitButton.exists()).toBe(false);
  //   });
  // });
// });

// test('does not throw warning with expected props', () => {
//   checkProps(Input, { secretWord: 'party' });
// })

// describe('state controlled input field', () => {
//   let mockSetCurrentGuess = jest.fn();
//   let wrapper;

//   beforeEach(() => {
//     mockSetCurrentGuess.mockClear();
//     React.useState = () => ["", mockSetCurrentGuess];
//     wrapper = setup({ success: false });
//   });
//   test('state updates with value of input box upon change', () => {
//     const inputBox = findByTestAttr(wrapper, 'input-box');
//     const mockEvent = { target: { value: 'train' } };

//     inputBox.simulate("change", mockEvent);
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
//   });
//   test('field is cleared upon submit button click', () => {
//     const inputBox = findByTestAttr(wrapper, 'input-box');
//     const mockEvent = { target: { value: 'train' } };

//     inputBox.simulate("change", mockEvent);
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
//   });
// })
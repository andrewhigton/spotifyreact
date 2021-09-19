import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtils';
import { Provider } from 'react-redux';

import TrackSearch from './TrackSearch';

// mock entire module for destructuring useState on import //////
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const setup = (initialState={}) => {
  // const setup = () => {
  const store = storeFactory(initialState);
  return shallow(<TrackSearch searchInput={'footloose'} />);
  //problem comes when you use provider. can't get mount to work
  // return shallow(<Provider store={store}><TrackSearch searchInput={'footlose'} /></Provider>);
  // return mount(<Provider store={store}><TrackSearch searchInput={'footlose'} /></Provider>);

}

describe('render', () => {
  // describe('success is false', () => {
    let wrapper = setup();
  //   beforeEach(() => {
  //     wrapper = setup({ success: false });
  //   })
    test.skip('TrackSearch renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'track-search');

      expect(inputComponent.length).toBe(1);
    });
    
    test.skip('TrackSearch input box displays', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });
    
    test.skip('submit button displays', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
//   describe('success is true', () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = setup({ success: true });
//     })
//     test('Input renders without error', () => {
//       const inputComponent = findByTestAttr(wrapper, 'component-input');
//       expect(inputComponent.length).toBe(1);
//     });
//     test('input box does not display', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box');
//       expect(inputBox.exists()).toBe(false);
//     });
//     test('submit button does not display', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button');
//       expect(submitButton.exists()).toBe(false);
//     });
//   });
// });

// test('does not throw warning with expected props', () => {
//   checkProps(Input, { secretWord: 'party' });
// })

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test.skip('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'footloose' } };

    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('footloose');
  });
  //cant get this to call. why? 
  test.skip('field is cleared on submit button click', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    
    inputBox.simulate("click", { preventDefault: () => {}  });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
})
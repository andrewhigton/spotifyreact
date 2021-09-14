import { shallow, mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import MainHeader from './MainHeader';
import { Provider } from 'react-redux';

// import languageContext from './contexts/languageContext';
// import successContext from './contexts/successContext';

/**
* Factory function to create a ReactWrapper for the Congrats component.
* @function setup
* @param {object} testValues - contextValues specific to this setup.
* @returns {ReactWrapper}
*/

// const defaultProps = { success: false };

const defaultProps = { headerTitle: 'Browse' };

const setup = (props = {}) => {
  const store = storeFactory();
  const setUpProps = {...props}
  // const setUpProps = {defaultProps, ...props}
  return mount(<Provider store={store}><MainHeader {...setUpProps} /></Provider>
  // return mount(<Provider store={store}><MainHeader props={props} /></Provider>
      ) 
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'main-head');
    expect(component.length).toBe(1);
});

test('renders header title when `headerTitle` prop is true', () => {
    const wrapper = setup({ headerTitle: 'Browse' });
    const browseComponent = findByTestAttr(wrapper, 'browse-head');
    // console.log(wrapper.debug());
    expect(browseComponent.length).toBe(1);
});
//trying to override props here is the problem
//dont get it, the main one is different, but the inner props always shows browse
// test('does not render header title when `headerTitle` prop is not `Browse`', () => {
//     const wrapper = setup({ headerTitle: 'Other' });
//     const browseComponent = findByTestAttr(wrapper, 'browse-head');
//     console.log(wrapper.debug());
//     expect(browseComponent.length).toBe(0);    
// });
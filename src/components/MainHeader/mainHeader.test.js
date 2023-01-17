import { shallow, mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import MainHeader from './MainHeader';
import { Provider } from 'react-redux';

jest.mock('../../actions/userinterfaceActions');
jest.mock('../../actions/songActions');


/**
* Factory function to create a ReactWrapper for the Congrats component.
* @function setup
* @param {object} testValues - contextValues specific to this setup.
* @returns {ReactWrapper}
*/

const defaultProps = { headerTitle: 'Other' };

const setup = (props = {}) => {
  const store = storeFactory();
  const setUpProps = {...defaultProps, ...props}
  return mount(<Provider store={store}><MainHeader {...setUpProps} /></Provider>
      ) 
}

const defaultProps1 = { };
const setup1 = (props = {}) => {
  const store = storeFactory();
  const setUpProps = {...defaultProps1, ...props}
  return mount(<Provider store={store}><MainHeader {...setUpProps} /></Provider>
      ) 
}


test.skip('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'main-head');
    expect(component.length).toBe(1);
});

test.skip('renders header title when `headerTitle` prop is true', () => {
    const wrapper = setup1({ headerTitle: 'Browse'});
    const browseComponent = findByTestAttr(wrapper, 'browse-head');
    expect(browseComponent.length).toBe(1);
});

test.skip('does not render header title when `headerTitle` prop is not `Browse`', () => {
    const wrapper = setup();
    const browseComponent = findByTestAttr(wrapper, 'browse-head');
    expect(browseComponent.length).toBe(0);    
});

test.skip('updateheaderTitle called with browse property with onclick', () => {
    const wrapper = setup1({ headerTitle: 'Browse'});
    const clickComponent = findByTestAttr(wrapper, 'click-button');
    clickComponent.simulate('click', { preventDefault() {}});    
    expect(mockUpdateHeaderTitle).toHaveBeenCalledWith('Browse')
});

test.skip('updateheaderTitle called with browse property with onclick', () => {
    const wrapper = setup1({ headerTitle: 'Browse'});
    const clickComponent = findByTestAttr(wrapper, 'click-button');
    clickComponent.simulate('click', { preventDefault() {}});    
    expect(mockUpdateViewType).toHaveBeenCalledWith('Featured')
});



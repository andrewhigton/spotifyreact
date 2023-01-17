import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtils';
import { Provider } from 'react-redux';

import BrowseView from './BrowseView';

const store = storeFactory();

const setup = (props={}) => {
  const setUpProps = {...props};
    return mount(<Provider store={store}><BrowseView {...setUpProps}/></Provider>)
};


describe('render', () => {

    let wrapper;

    test.skip('BrowseView renders without error', () => {
      const wrapper = setup();      
      const browseComponent = findByTestAttr(wrapper, 'browse-view');
      expect(browseComponent.length).toBe(1);
    });
    
    test.skip('BrowseView does not render if view is false', () => {
      const wrapper = setup();      
      const browseComponent = findByTestAttr(wrapper, 'browse-view');
      expect(browseComponent.text()).toBe('please wait');
    });
  });


  const defaultProps = {};
  const setup1 = (props={}) => {
  const setUpProps = {...defaultProps, ...props};

    return mount(<Provider store={store}><BrowseView {...setUpProps}/></Provider>)
};
  
  describe('playlist songs render if `view` is true', () => {
  

  let wrapper;
  const playlistTitles = {  browse: ['train', 'agile','party'] };

  
  test.skip('playlists render', () => {
    const wrapper = setup1();      
    const playlistComponent = findByTestAttr(wrapper, 'playlist-titles');
    console.log(wrapper.debug())
    expect(playlistComponent.exists()).toBe(true);    
  });
  
  test.skip('playlist renders correct number of titles', () => {
    const wrapper = setup1();      
    const guessedWordsNode = findByTestAttr(wrapper, 'playlist-titles');
    expect(guessedWordsNode.length).toBe(3);    
  });


})
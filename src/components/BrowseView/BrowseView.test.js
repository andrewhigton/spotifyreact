import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtils';
import { Provider } from 'react-redux';

import BrowseView from './BrowseView';

const store = storeFactory();

const setup = (props={}) => {
  const setUpProps = {...props};
    // return shallow(<BrowseView {...setUpProps}/>)
    return mount(<Provider store={store}><BrowseView {...setUpProps}/></Provider>)
};


describe('render', () => {

    let wrapper;

    test('BrowseView renders without error', () => {
      const wrapper = setup();      
      const browseComponent = findByTestAttr(wrapper, 'browse-view');
      expect(browseComponent.length).toBe(1);
    });
    
    test('BrowseView does not render if view is false', () => {
      const wrapper = setup();      
      const browseComponent = findByTestAttr(wrapper, 'browse-view');
      expect(browseComponent.text()).toBe('please wait');
    });
  });

  const playlistTitles = {  browse: ['train', 'agile','party'] };

  const setup1 = (props={}) => {
  const setUpProps = {...playlistTitles, ...props};
    // return shallow(<BrowseView {...setUpProps}/>)
    return mount(<Provider store={store}><BrowseView {...setUpProps}/></Provider>)
};
  
  describe('playlist songs render if `view` is true', () => {
  
  let wrapper;
  const playlistTitles = {  browse: ['train', 'agile','party'] };

  
  test('playlists render', () => {
    // const wrapper = setup()
    const wrapper = setup1();      
    const playlistComponent = findByTestAttr(wrapper, 'playlist-titles');
    // expect(playlistComponent.exists()).toBe(true);    
    expect(playlistComponent).toBe({ browse: ['train', 'agile','party' ] });    
  });
  
  test('playlist renders correct number of titles', () => {
    const wrapper = setup1();      
    
    console.log(wrapper.debug())
    const guessedWordsNode = findByTestAttr(wrapper, 'playlist-titles');
    expect(guessedWordsNode.length).toBe(3);    
  });

  // test('correct number of guessed words', () => {
  //   const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
  //   expect(guessedWordNodes.length).toBe(guessedWords.length);
  // });

  // test('includes guess word index for each word', () => {
  //   const guessWordIndexes = findByTestAttr(wrapper, 'guessed-word-index');
  //   const indexTextSet = new Set(guessWordIndexes.map(wrapper => wrapper.text()))
    
  //   const expectedSet = new Set(guessedWords.map((word, index) => (index + 1).toString()))
  //   expect(indexTextSet).toEqual(expectedSet);
  // });

  // test('displays correct number of total guesses', () => {
  //   const totalGuesses = findByTestAttr(wrapper, 'total-guesses');
   
  //   expect(totalGuesses.text()).toEqual(guessedWords.length.toString());
  // });

})
import React from 'react';
import { mount } from 'enzyme';
import Home from '../pages';
// import { describe } from 'jest-circus';
// import { it } from '@jest/globals';

describe('it test', () => {
  const allPostsData = [];
  it('it it', () => {
    const wrapper = mount(<Home allPostsData={allPostsData} />);

    expect(wrapper.find('[data-index-a]').render().text()).toBe('President of Promet System');
  });
});

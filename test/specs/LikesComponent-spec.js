import { mount } from 'enzyme';
import LikesComponent from '../../src/app/component/LikesComponent.js';
import React from 'react';

describe('Likes Component test suit', () => {

    let props, wrapper;

    beforeEach(function() {
        props = {
            likes: { count: 2 },
            updateLikes: () => {}
        };
        wrapper = mount(<LikesComponent {...props} />);
    });

    it('should render the component', () => {
        // checking container class
        expect(wrapper.find('.likes-container').hasClass('likes-container')).toBe(true);
        
        // checking text node
        expect(wrapper.find('p').text()).toBe(`Likes: ${props.likes.count}`);
    });

});

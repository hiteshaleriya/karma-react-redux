import { mount } from 'enzyme';
import LikesComponent from '../../src/app/component/LikesComponent.js';
import React from 'react';

describe('Likes Component test suit', () => {

    let props, wrapper, likesCount;

    beforeEach(function() {
        props = {
            likes: { count: 2 },
            updateLikes: (count) => {
                likesCount = count;
            },
            asyncUpdateLikes: (count) => {
                likesCount = count;
            }
        };
        wrapper = mount(<LikesComponent {...props} />);
    });

    it('should render the component', () => {
        // checking container class
        expect(wrapper.find('.likes-container').hasClass('likes-container')).toBe(true);
        
        // checking text node
        expect(wrapper.find('p').text()).toBe(`Likes: ${props.likes.count}`);
    });

    it('should increment likes count on calling onLike', () => {
        // increase like by one
        wrapper.instance().onLike();
        expect(likesCount).toBe(props.likes.count+1);
    });

    it('should increment likes count on calling asyncLike', () => {
        // increase like by one
        wrapper.instance().asyncLike();
        expect(likesCount).toBe(props.likes.count+1);
    });

});

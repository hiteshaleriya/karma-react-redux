import { mount } from 'enzyme';
import LikeButton from '../../src/app/component/LikeButton.js';
import React from 'react';

describe('LikeButton test suit', () => {

    let onClickFunction_spy, props, wrapper;

    beforeEach(function() {
        onClickFunction_spy = jasmine.createSpy('onClickFunction');
        props = {
            title: "Like Me",
            count: 4,
            onLike: onClickFunction_spy
        };
        wrapper = mount(<LikeButton {...props} />);
    });

    it('should render the component with valid props', () => {
        const likeBtnProps = wrapper.props();
        // subcomponent node
        expect(wrapper.find('button').text()).toBe(`Like Me (${props.count})`);

        // checking subcomponent props
        expect(likeBtnProps.title).toBe('Like Me');
        expect(likeBtnProps.count).toEqual(props.count);
    });

    it('should call the given function on click', () => {
        wrapper.find("button").simulate('click');
        expect(onClickFunction_spy).toHaveBeenCalled();
    });

});
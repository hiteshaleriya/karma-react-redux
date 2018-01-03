import { mount } from 'enzyme';
import LikesComponent from '../../src/app/component/LikesComponent.js';
import React from 'react';

describe('Likes Component Suit', () => {

    let setup = () => {
        const props = {
            likes: { count: 2 },
            updateLikes: () => {}
        };

        const enzymeWrapper = mount(<LikesComponent {...props} />)

        return {
            props,
            enzymeWrapper
        }
    };

    it('should render the component', () => {
        const { props, enzymeWrapper } = setup();
        // checking container class
        expect(enzymeWrapper.find('.likes-container').hasClass('likes-container')).toBe(true);
        
        // checking text node
        expect(enzymeWrapper.find('p').text()).toBe(`Likes: ${props.likes.count}`);
    });

    it('should render subcomponents with valid props', () => {
        const { props, enzymeWrapper } = setup();
        const likeBtnProps = enzymeWrapper.find('LikeButton').props();
        // subcomponent node
        expect(enzymeWrapper.find('button').text()).toBe(`Like Me (${props.likes.count})`);

        // checking subcomponent props
        expect(likeBtnProps.title).toBe('Like Me');
   		expect(likeBtnProps.count).toEqual(props.likes.count);
    });

});



/*it('should render self and subcomponents', () => {
    const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
    expect(todoInputProps.newTodo).toBe(true)
    expect(todoInputProps.placeholder).toEqual('What needs to be done?')
})*/
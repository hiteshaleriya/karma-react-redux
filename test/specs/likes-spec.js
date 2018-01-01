import { LikesComponent } from '../../src/app/component/LikesComponent.js';

describe('Likes Component Suit', () => {

    it('should add two numbers', () => {
        let calculator = new LikesComponent({likes: 0});
        console.log(calculator)
        expect(calculator.sum(1,4)).toBe(5);
    });

});
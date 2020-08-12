import React from 'react';
import { render } from '@testing-library/react';
import Card from './';

/**
 * Card component
 * I'm using data-testid to make a resilient tests
 * see more: https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
 */
describe('Card component', () => {
	test('renders correct data in card component', () => {
		// arrange
		const character = {
			name: 'Chuck norris',
			img: 'myImageUrl',
			nickname: 'nick',
			status: 'alive',
			occupation: ['test', 'test1']
		}
		const { getByTestId } = render(<Card character={character} />);
		
		// assert
		let el = getByTestId('cardTitle');
		expect(el).toBeInTheDocument();
		expect(el.textContent).toEqual(character.name);

		el = getByTestId('cardNickName');
		expect(el).toBeInTheDocument();
		expect(el.textContent).toEqual(character.nickname);

		el = getByTestId('cardStatus');
		expect(el).toBeInTheDocument();
		expect(el.textContent).toEqual(character.status);

		el = getByTestId('cardOccupation');
		expect(el).toBeInTheDocument();
		expect(el.textContent).toEqual(character.occupation.join());
	});

	test('renders correct background iamge in card component', () => {
		// arrange
		const char = {
			name: 'tste',
			img: 'myImageUrl',
			nickname: 'nick',
			status: 'alive',
			occupation: ['test', 'test1']
		}

		// act
		const { getByTestId, container } = render(<Card character={char} />);
		let el = getByTestId('cardImg');

		// assert
		expect(el).toBeInTheDocument();
		expect(el.style.length).toEqual(2);
		expect(el.style._values['background-image']).toContain(char.img);
		expect(el.style._values['background-size']).toEqual('cover');
});
});
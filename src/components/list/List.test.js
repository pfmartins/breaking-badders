import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import List from './';
import Loader from 'react-loader-spinner'

configure({adapter: new Adapter()});

describe('List component', () => {
    test('should render List component', () => {
      // arrange
      const { getByTestId } = render(<List />);
      const listElement = getByTestId('list');
     
      // assert
      expect(listElement).toBeInTheDocument();
      expect(listElement.className).toEqual('list');
    });

    test("should render a Loader before api call resolve it", async () => {
       // arrange
       const { getByTestId } = render(<List />);
    
       const loaderElement = getByTestId('loader');
       // assert
       expect(loaderElement).toBeInTheDocument();

       const listElement = await waitForElement (() => getByTestId('listContent'));
       // assert
       expect(listElement.className).toEqual('list-content');
    });

    test("should render correct component when api calls execute", async () => {
       // arrange
       const { getByTestId, container } = render(<List />);

       let listElement = container.querySelector('.list-content');
       // assert
       expect(listElement).toBeNull();

       listElement = await waitForElement (() => getByTestId('listContent'));
       // assert
       expect(listElement).toBeInTheDocument();
       expect(listElement.querySelectorAll('.card').length).toBeGreaterThan(0);
    });

    test('should execute fetch when componentDidMount', () => {
      // arrange
      const fetchSpy = jest.spyOn(window, 'fetch');
      const listInstance = shallow(<List/>);

      // assert
      expect(fetchSpy).toBeCalled();
    });
});
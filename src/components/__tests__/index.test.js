import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../About';

const { asFragment } = render(<About />);

afterEach(cleanup);

//about tests
describe('About component', () => {
   // First Test
   it('renders', () => {
    render(<About />);
  });
  
  it('matches snapshot DOM node structure', () => {
    expect(asFragment()).toMatchSnapshot();
})

});


import { render } from '@testing-library/react';
import React from 'react';

import { initialState } from '../getStore';
import { AppFC, mapStateToProps } from '../App';

describe('Root App component rendering', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });

  // it('enders without crashing', async () => {
  //   render(<AppFC round={0} started={true} onStart={() => null} />);
  //   //    expect(await screen.findByRole("h3", { name: /Click/i })).toBeDisabled();
  //   // const linkElement = screen.getByText(/learn react/i);
  //   // expect(linkElement).toBeInTheDocument();
  // });

  it('renders loading state', () => {
    const props = {
      started: false,
      round: 0,
      onStart: jest.fn(),
    };
    const { container, getByText } = render(<AppFC {...props} />);
    expect(container).toContainElement(getByText(/Loading/));
    expect(container.getElementsByClassName('app').length).toBe(0);
  });

  // it('renders started state', () => {
  //   const props = {
  //     started: true,
  //     round: 0,
  //     onStart: jest.fn(),
  //   };
  //   const { container } = render(<AppFC {...props} />);
  //   expect(container.getElementsByClassName('loading').length).toBe(0);
  //   expect(container.getElementsByClassName('app').length).toBe(1);
  // });

  it('properly binds state', () => {
    const state = {
      ...initialState,
      started: true,
    };
    const props = mapStateToProps(state);
    expect(props.started).toEqual(true);
  });
});

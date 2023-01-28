import { render } from '@testing-library/react';

import { Score, mapStateToProps } from '../components/score/Score';

import { initialState } from '../getStore';

describe('Score component rendering', () => {
  test('it should render Score without crashing', async () => {
    render(<Score score={[0, 0]} />);
  });

  it('Should renders started Score state', () => {
    const props = {
      score: [1, 6],
    };
    const { container } = render(<Score {...props} />);
    expect(container.getElementsByClassName('loading').length).toBe(0);
  });

  it('properly binds state', () => {
    const state = {
      ...initialState,
      score: [0, 0],
    };
    const props = mapStateToProps(state);
    expect(props.score).toEqual([0, 0]);
  });
});

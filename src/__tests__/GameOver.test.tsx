import { render, screen } from '@testing-library/react';
import { GameOver, mapStateToProps } from '../components/game_over/GameOver';

import { initialState } from '../getStore';

describe('Score component rendering', () => {
  //   beforeEach(() => {
  //     jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  //   });

  test('Should render Score without crashing', async () => {
    render(<GameOver score={[0, 0]} history={[]} />);
    expect(await screen.findByText(/Game is finished with 20 round and totol Score is/i)).toBeInTheDocument();
  });

  it('Should renders started Gameover state', () => {
    const props = {
      score: [1, 6],
      history: [],
    };
    const { container } = render(<GameOver {...props} score={[0, 0]} />);
    expect(container.getElementsByClassName('text-center').length).toBe(1);
  });

  it('properly binds state', () => {
    const state = {
      ...initialState,
      score: [0, 0],
      history: [],
    };
    const props = mapStateToProps(state);
    expect(props.score).toEqual([0, 0]);
  });
});

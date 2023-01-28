import { render, screen } from '@testing-library/react';
import { Battle } from '../components/battle/Battle';

describe('Score component rendering', () => {
  test('Should render Score without crashing', async () => {
    render(
      <Battle
        round={0}
        resultCurrentBattle={[
          { unit: 'string', score: 1 },
          { unit: 'string', score: 1 },
        ]}
      />
    );
  });
  test('Should display text "choose you next move" before starting the game', async () => {
    render(
      <Battle
        round={0}
        resultCurrentBattle={[
          { unit: 'string', score: 1 },
          { unit: 'string', score: 1 },
        ]}
      />
    );
    expect(await screen.findByText(/choose you next move/i)).toBeInTheDocument();
  });
});

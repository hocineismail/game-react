import { render, screen } from '@testing-library/react';
import History from '../components/history/History';

describe('History component rendering', () => {
  test('On initial render history without crashing', async () => {
    const { container } = render(<History history={[]} />);
    expect(container.getElementsByClassName('btn-fight').length).toBe(1);
  });

  it('On initial render, the  show battle history button is enabled', async () => {
    let props = {
      history: [],
    };
    render(<History {...props} />);
    expect(await screen.findByRole('button', { name: /show battle's history/i })).toBeEnabled();
  });
});

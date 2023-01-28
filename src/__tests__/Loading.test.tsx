import { render } from '@testing-library/react';

import Loading from '../components/loading/Loading';

describe('Loading component rendering', () => {
  test('it should render loading component', async () => {
    render(<Loading />);
    const { container } = render(<Loading />);
    expect(container.getElementsByClassName('loading').length).toBe(1);
  });
});

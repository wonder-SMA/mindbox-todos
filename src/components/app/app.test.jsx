import { describe, test, expect } from 'vitest';
import { renderWithMobx } from '@/helpers/render-with-mobx';
import App from './';

describe('App', () => {
  test('App1 snapshot didn\'t change', () => {
    const component = renderWithMobx(
      <App />,
    );
    expect(component).toMatchSnapshot();
  });
});

import { describe, it, expect } from 'vitest';
import { renderWithMobx } from '@/helpers/render-with-mobx';
import TodoList from './';

describe('TodoList', () => {
  it('Should be displayed if isClosed equals false', async () => {
    const { container } = renderWithMobx(
      <TodoList isClosed={false} />,
    );
    expect(container.firstChild).toHaveStyle({ display: 'flex' });
  });

  it('Should be hidden if isClosed equals true', async () => {
    const { container } = renderWithMobx(
      <TodoList isClosed={true} />,
    );
    expect(container.firstChild).toHaveStyle({ display: 'none' });
  });
});

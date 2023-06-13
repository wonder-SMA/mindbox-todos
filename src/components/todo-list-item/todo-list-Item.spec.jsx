import { describe, it, expect } from 'vitest';
import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithMobx } from '@/helpers/render-with-mobx';
import TodoListItem from './';

describe('TodoListItem', () => {
  it('Should render with mdiCheckboxBlankCircleOutline Icon', () => {
    const { container } = renderWithMobx(
      <TodoListItem todo={'Buy groceries'} />,
    );
    expect(container.getElementsByClassName('todo-wrapper')[0]).toMatchInlineSnapshot(`
      <div
        class="todo-wrapper"
      >
        <svg
          role="presentation"
          style="width: 2.25rem; height: 2.25rem;"
          tabindex="0"
          viewBox="0 0 24 24"
        >
          <path
            d="${mdiCheckboxBlankCircleOutline}"
            style="fill: #cadeda;"
          />
        </svg>
        <p>
          Buy groceries
        </p>
      </div>
    `);
  });

  it('Should render with text', () => {
    renderWithMobx(
      <TodoListItem todo={'Buy groceries'} />,
    );
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });

  it('Should render with text without the text-decoration property equals line-through', () => {
    renderWithMobx(
      <TodoListItem todo={'Buy groceries'} />,
    );
    expect(screen.getByText('Buy groceries')).not.toHaveStyle({ textDecoration: 'line-through' });
  });

  it('Should render with mdiCheckboxMarkedCircleOutline Icon, which appears after clicking', async () => {
    const { container } = renderWithMobx(
      <TodoListItem todo={'Buy groceries'} />,
    );
    const presentation = screen.getByRole('presentation');
    await userEvent.click(presentation);
    expect(container.getElementsByClassName('todo-wrapper')[0]).toMatchInlineSnapshot(`
      <div
        class="todo-wrapper"
      >
        <svg
          role="presentation"
          style="width: 2.25rem; height: 2.25rem;"
          tabindex="0"
          viewBox="0 0 24 24"
        >
          <path
            d="${mdiCheckboxMarkedCircleOutline}"
            style="fill: #cadeda;"
          />
        </svg>
        <p>
          Buy groceries
        </p>
      </div>
    `);
  });

  it('Should render with text with the text-decoration property equals line-through, which appears after clicking', async () => {
    renderWithMobx(
      <TodoListItem todo={'Buy groceries'} />,
    );
    const presentation = screen.getByRole('presentation');
    await userEvent.click(presentation);
    expect(screen.getByText('Buy groceries')).toHaveStyle({ textDecoration: 'line-through' });
  });
});

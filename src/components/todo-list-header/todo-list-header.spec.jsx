import { expect, describe, it, vi } from 'vitest';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoListHeader from './';

describe('TodoHeader', () => {
  it('Should render with mdiChevronDown Icon', () => {
    const mockCallback = vi.fn();
    render(
      <TodoListHeader
        isClosed={false}
        closeListHandler={mockCallback}
      />,
    );
    expect(screen.getByRole('presentation')).toMatchInlineSnapshot(`
      <svg
        class="todo-list-arrow-down"
        role="presentation"
        style="width: 2.25rem; height: 2.25rem;"
        tabindex="0"
        viewBox="0 0 24 24"
      >
        <path
          d="${mdiChevronDown}"
          style="fill: #545454;"
        />
      </svg>
    `);
  });

  it('Should render with closeListHandler callback, which works correctly', async () => {
    const mockCallback = vi.fn();
    render(
      <TodoListHeader isClosed={false} closeListHandler={mockCallback} />,
    );
    await userEvent.click(screen.getByRole('presentation'));
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('Should render with mdiChevronRight Icon, which appears if isClosed equals true', async () => {
    const mockCallback = vi.fn();
    render(
      <TodoListHeader isClosed={true} closeListHandler={mockCallback} />,
    );
    const presentation = screen.getByRole('presentation');
    await userEvent.click(presentation);
    expect(presentation).toMatchInlineSnapshot(`
      <svg
        class="todo-list-arrow-right"
        role="presentation"
        style="width: 2.25rem; height: 2.25rem;"
        tabindex="0"
        viewBox="0 0 24 24"
      >
        <path
          d="${mdiChevronRight}"
          style="fill: #545454;"
        />
      </svg>
    `);
  });
});

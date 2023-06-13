import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithMobx } from '@/helpers/render-with-mobx';
import TodoAddField from './';

describe('TodoAddField', () => {
  it('Should contain placeholder by default', () => {
    renderWithMobx(
      <TodoAddField />,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Введите задачу');
  });

  it('Should render with controlled input-number element, which works correctly', async () => {
    renderWithMobx(
      <TodoAddField />,
    );
    await userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.getByDisplayValue('React')).toBeInTheDocument();
  });

  it('Should render with button named Add todo', () => {
    renderWithMobx(
      <TodoAddField />,
    );
    expect(screen.getByRole('button', { name: /Add todo/ })).toBeInTheDocument();
  });

  it('Should be cleared after pressing the enter key', async () => {
    renderWithMobx(
      <TodoAddField />,
    );
    const textbox = screen.getByRole('textbox');
    await userEvent.type(textbox, 'React');
    await userEvent.keyboard('{enter}');
    expect(textbox).toHaveDisplayValue('');
  });

  it('Should be cleared after clicking the button', async () => {
    renderWithMobx(
      <TodoAddField />,
    );
    const textbox = screen.getByRole('textbox');
    await userEvent.type(textbox, 'React');
    await userEvent.click(screen.getByRole('button'));
    expect(textbox).toHaveDisplayValue('');
  });
});

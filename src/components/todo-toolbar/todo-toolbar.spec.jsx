import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithMobx } from '@/helpers/render-with-mobx';
import TodoToolBar from './';

describe('TodoToolBar', () => {
  it('Should render with text', () => {
    renderWithMobx(
      <TodoToolBar />,
    );
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });

  it('Should render with button named All with the border property equals 1px solid darkred', () => {
    renderWithMobx(
      <TodoToolBar />,
    );
    const button = screen.getByRole('button', { name: /All/ });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ border: '1px solid darkred' });
  });

  it('Should render with button named Active', () => {
    renderWithMobx(
      <TodoToolBar />,
    );
    expect(screen.getByRole('button', { name: /Active/ })).toBeInTheDocument();
  });

  it('Should render with button named Completed', () => {
    renderWithMobx(
      <TodoToolBar />,
    );
    expect(screen.getByRole('button', { name: /Completed/ })).toBeInTheDocument();
  });


  it('Should render with button named Clear completed', () => {
    renderWithMobx(
      <TodoToolBar />,
    );
    expect(screen.getByRole('button', { name: /Clear completed/ })).toBeInTheDocument();
  });
});

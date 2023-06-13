import { render } from '@testing-library/react';
import { StoreContext } from '@/main.jsx';
import TodosStore from '@/store/todos-store.js';

export function renderWithMobx(component) {

  return render(
    <StoreContext.Provider
      value={{
        store: new TodosStore(),
      }}
    >
      {component}
    </StoreContext.Provider>,
  );
}

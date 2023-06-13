import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './components/app';
import TodosStore from './store/todos-store';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    overflow-x: hidden;
  }

  ul, li, h1, p {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container || document.createElement('div'));

export const StoreContext = createContext(null);

root.render(
  <StoreContext.Provider
    value={{
      store: new TodosStore(),
    }}
  >
    <Global />
    <App />
  </StoreContext.Provider>,
);

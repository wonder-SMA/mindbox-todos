import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Header from '@/components/ui/header';
import TodoAddField from '@/components/todo-add-field';
import TodoListHeader from '@/components/todo-list-header';
import TodoList from '@/components/todo-list';
import TodoToolbar from '@/components/todo-toolbar';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 28px;
  background-color: #f5f5f5;

  svg {
    flex-shrink: 0;
    outline: none;
    cursor: pointer;

    &:focus-visible {
      border: 2px solid black;
      border-radius: 3px;
    }
  }

  *:not(:first-child, :last-child) {
    p {
      margin-left: 14px;
      font-size: 26px;
      white-space: nowrap
    }
  }

  @media (min-width: 576px) {
    *:not(:first-child, :last-child) {
      p {
        margin-left: 18px;
        font-size: 30px;
        white-space: nowrap
      }
    }
  }

  @media (min-width: 740px) {
    width: 740px;
    margin: 0 auto;
  }
`;

const App = () => {
  const [isClosed, setIsClosed] = useState(false);

  const closeListHandler = useCallback(() => {
    setIsClosed(!isClosed);
  }, [isClosed]);

  return (
    <AppWrapper>
      <Header heading="todos" />
      <TodoAddField />
      <TodoListHeader
        isClosed={isClosed}
        heading="What needs to be done?"
        closeListHandler={closeListHandler}
      />
      <TodoList isClosed={isClosed} />
      <TodoToolbar />
    </AppWrapper>
  );
};

export default App;

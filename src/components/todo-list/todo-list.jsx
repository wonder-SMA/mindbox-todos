import { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';
import { StoreContext } from '@/main';
import TodoListItem from '@/components/todo-list-item';

const StyledTodoList = styled.ul`
  max-height: calc(100vh - 340px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ${props => props?.store.todos.length && css`
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  `};

  &::-webkit-scrollbar {
    width: 0;
  }

  ${props => props?.isClosed && css`
    display: none;
  `};

  @media (min-width: 576px) {
    max-height: calc(100vh - 364px);
  }
`;

const TodoList = memo(observer(function TodoList({ isClosed = false }) {
  const { store } = useContext(StoreContext);

  return (
    <StyledTodoList store={store} isClosed={isClosed}>
      {store.todos.map(todo =>
        <TodoListItem key={todo} todo={todo} />,
      )}
    </StyledTodoList>
  );
}));

export default TodoList;

TodoList.propTypes = {
  isClosed: PropTypes.bool,
};

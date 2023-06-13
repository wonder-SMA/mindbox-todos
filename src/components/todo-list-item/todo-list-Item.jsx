import { useState, useContext, useLayoutEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';
import Icon from '@mdi/react';
import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import { StoreContext } from '@/main';
import { Item, overflowX } from '@/styles/mixins';

const StyledTodoListItem = styled.li`
  .todo-wrapper {
    min-height: 78px;

    ${overflowX()}
    ${Item()}

    ${props => props?.isMarked && css`
      p {
        text-decoration: line-through;
        color: #bdbebd;
      }
    `}
  }
`;

const TodoListItem = memo(observer(function TodoListItem({ todo }) {
  const { store } = useContext(StoreContext);
  const [isMarked, setIsMarked] = useState(false);

  useLayoutEffect(() => {
    setIsMarked(store.completedTodos.includes(todo));
  }, [store.completedTodos, todo]);

  const setCheckboxHandler = useCallback(() => {
    store.setCompletedTodos(todo);
    setIsMarked(!isMarked);
  }, [store, todo, isMarked, setIsMarked]);

  // Обработчик нажатия клавиши Enter
  const onKeyDown = useCallback(event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setCheckboxHandler();
    }
  }, [setCheckboxHandler]);

  return (
    <StyledTodoListItem isMarked={isMarked}>
      <div className="todo-wrapper">
        <Icon
          onKeyDown={onKeyDown}
          tabIndex={0}
          path={isMarked ? mdiCheckboxMarkedCircleOutline : mdiCheckboxBlankCircleOutline}
          size={window.matchMedia('(min-width: 576px)').matches ? 2 : 1.5}
          color="#cadeda"
          onClick={setCheckboxHandler}
        />
        <p>{todo}</p>
      </div>
    </StyledTodoListItem>
  );
}));

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.string,
};

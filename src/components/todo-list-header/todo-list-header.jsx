import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
import { Item, overflowX } from '@/styles/mixins';

const StyledTodoHeader = styled.div`
  min-height: 78px;

  ${overflowX()}
  ${Item()}
  p {
    font-style: italic;
    color: #bdbebd;
  }
`;

const TodoListHeader = memo(function TodoHeader({ isClosed = false, heading, closeListHandler }) {

  // Обработчик нажатия клавиши Enter
  const onKeyDown = useCallback(event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      closeListHandler();
    }
  }, [closeListHandler]);

  return (
    <StyledTodoHeader>
      <Icon
        className={`todo-list-arrow-${isClosed ? 'right' : 'down'}`}
        onKeyDown={onKeyDown}
        tabIndex={0}
        path={isClosed ? mdiChevronRight : mdiChevronDown}
        size={window.matchMedia('(min-width: 576px)').matches ? 2 : 1.5}
        color="#545454"
        onClick={closeListHandler}
      />
      <p className="todo-list-heading">{heading}</p>
    </StyledTodoHeader>
  );
});

export default TodoListHeader;

TodoListHeader.propTypes = {
  isClosed: PropTypes.bool,
  heading: PropTypes.string,
  closeListHandler: PropTypes.func.isRequired,
};

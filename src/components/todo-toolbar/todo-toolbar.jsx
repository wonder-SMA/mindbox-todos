import { useCallback, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { StoreContext } from '@/main';
import { Item, Layer } from '@/styles/mixins';
import Button from '@/components/ui/button';

const StyledTodoToolBar = styled.div`
  position: relative;
  height: 78px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${Item()}
  p {
    width: 100%;
    margin: 0 4px;
    font-size: 16px;
    text-align: center;
  }

  div {
    display: flex;
  }

  &:before {
    ${Layer({ width: '99%', bottom: '-6px', left: '.5%' })}
  }

  &:after {
    ${Layer({ width: '98%', bottom: '-12px', left: '1%' })}
  }

  @media (min-width: 576px) {
    height: 54px;
    justify-content: space-between;

    div {
      width: 66%;
      display: flex;
    }

    p {
      width: auto;
      font-size: 18px;
    }

    button:last-child {
      margin-left: auto;
    }
  }
`;

const TodoToolbar = observer(() => {
  const { store } = useContext(StoreContext);

  const onClick = useCallback(event => {
    store.setFilterValue(event.target.name);
  }, [store]);

  const onClear = useCallback(() => {
    store.clearCompletedTodos();
  }, [store]);

  return (
    <StyledTodoToolBar>
      <p className="items-left">{`${store.activeTodos.length} items left`}</p>
      <div>
        <Button name="all" title="All" isActive={store.filterValue === 'all'} onClick={onClick} />
        <Button name="active" title="Active" isActive={store.filterValue === 'active'} onClick={onClick} />
        <Button name="completed" title="Completed" isActive={store.filterValue === 'completed'} onClick={onClick} />
        <Button name="clear-completed" title="Clear completed" isActive={true} onClick={onClear} />
      </div>
    </StyledTodoToolBar>
  );
});

export default TodoToolbar;

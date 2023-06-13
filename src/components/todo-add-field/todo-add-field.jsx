import { useCallback, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { StoreContext } from '@/main';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

const StyledTodoAddField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: 1px solid darkred;
  }
`;

const TodoAddField = observer(() => {
  const [todo, setTodo] = useState('');
  const { store } = useContext(StoreContext);

  const onChange = useCallback(todo => {
    setTodo(todo);
  }, []);

  const onClick = useCallback(() => {
    if (todo) {
      store.setAllTodos(todo);
      store.setFilterValue('all');
    }
    setTodo('');
  }, [store, todo, setTodo]);

  // Обработчик нажатия клавиши Enter
  const onKeyDown = useCallback(event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onClick();
    }
  }, [onClick]);

  return (
    <StyledTodoAddField onKeyDown={onKeyDown}>
      <Input
        name="todo-input"
        value={todo}
        placeholder="Введите задачу"
        onChange={onChange}
      />
      <Button name="add-todo" title="Add todo" onClick={onClick} />
    </StyledTodoAddField>
  );
});

export default TodoAddField;

import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoList = (): any => {
  const todos = useSelector((state: any) => state.todos.todoState);

  return (
    <ListWrapper>
      {todos.map((todo: any) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.div`
  min-height: 95vh;
  flex: 1;
  font-size: 1.5rem;
  color: #676c71;
  background-color: #f6f8fa;
  border-radius: 1rem;
  margin: 0.5rem;
`;

import {
  editTodoAction,
  removeTodoAction,
  toggleTodoAction,
} from 'reducers/todos';
import { Todo } from 'types';
import { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, content, isCheck, createdAt } = todo;
  const dispatch = useDispatch();

  const onRemoveTodo = useCallback(() => {
    dispatch(removeTodoAction(id));
  }, []);

  const onToggleTodo = useCallback(() => {
    dispatch(toggleTodoAction(id));
  }, []);

  const onEditTodo = useCallback(() => {
    dispatch(editTodoAction(content));
  }, []);

  return (
    <ItemWrapper>
      <Checkbox onClick={onToggleTodo}>
        {isCheck ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text isCheck={todo.isCheck}>{content}</Text>
      <Date isCheck={todo.isCheck}>{createdAt}</Date>
      <EditButton onClick={onEditTodo} />
      <RemoveButton onClick={onRemoveTodo} />
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.li`
  display: flex;
  line-height: 2rem;
  font-size: 1.5rem;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  margin: 0 1.8rem;
  margin-bottom: 1rem;
  padding: 1.5rem 0.8rem;
  align-items: center;
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div<{ isCheck: boolean }>`
  flex: 1;
  font-size: 18px;

  ${props =>
    props.isCheck &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Date = styled.div<{ isCheck: boolean }>`
  flex: 0.3;
  font-size: 16px;

  ${props =>
    props.isCheck &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const EditButton = styled(MdEdit)`
  margin-right: 10px;
  cursor: pointer;
`;

const RemoveButton = styled(MdRemoveCircleOutline)`
  cursor: pointer;
`;

import { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { REMOVE_TODOS_REQUEST, TOGGLE_TODOS_REQUEST } from 'reducers/todos';
import styled from 'styled-components';

interface TodoItemProps {
  todo: any;
}

const TodoItem = ({ todo }: TodoItemProps): any => {
  const { id, content, isCheck, createdAt } = todo;
  const dispath = useDispatch();

  const onRemoveTodo = useCallback(() => {
    dispath({
      type: REMOVE_TODOS_REQUEST,
      data: id,
    });
  }, []);

  const onToggleTodo = useCallback(() => {
    dispath({
      type: TOGGLE_TODOS_REQUEST,
      data: id,
    });
  }, []);

  return (
    <ItemWrapper>
      <div onClick={onToggleTodo}>
        {isCheck ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <div className="text">{content}</div>
      <div>{createdAt}</div>
      <MdRemoveCircleOutline onClick={onRemoveTodo} />
    </ItemWrapper>
  );
};

export default TodoItem;

export const ItemWrapper = styled.li`
  display: flex;
  line-height: 2rem;
  font-size: 1.5rem;
  box-shadow: 0rem 0.3rem 0.9rem -0.8rem #0000003b;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  margin: 0 1.8rem;
  margin-bottom: 1rem;
  padding: 1.5rem 0.8rem;
`;

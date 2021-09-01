import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useCallback } from 'react';
import { addTodo } from 'reducers/todos';

const TodoForm = (): any => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(addTodo(text));
    },
    [text],
  );

  const onchangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <TodoInputWrapper>
      <InsertForm onSubmit={onSubmit}>
        <CustomInput
          value={text}
          onChange={onchangeText}
          placeholder="할 일을 적어주세요."
        />
        <button type="submit">제출</button>
      </InsertForm>
    </TodoInputWrapper>
  );
};

export default TodoForm;

const TodoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;
const InsertForm = styled.form``;

const CustomInput = styled.textarea`
  width: 100%;
  height: 7rem;
  resize: none;
  border: 1px solid #e6e6e6;
  padding: 0.7rem 1.2rem;

  &:focus {
    outline: none;
  }
`;

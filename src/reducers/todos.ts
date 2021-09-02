import { Todo } from 'types';

export const ADD_TODOS_REQUEST = 'todos/ADD_TODOS_REQUEST' as const;
export const ADD_TODOS_SUCCESS = 'todos/ADD_TODOS_SUCCESS' as const;
export const ADD_TODOS_FAILURE = 'todos/ADD_TODOS_FAILURE' as const;

export const TOGGLE_TODOS_REQUEST = 'todos/TOGGLE_TODOS_REQUEST' as const;
export const TOGGLE_TODOS_SUCCESS = 'todos/TOGGLE_TODOS_SUCCESS' as const;
export const TOGGLE_TODOS_FAILURE = 'todos/TOGGLE_TODOS_FAILURE' as const;

export const EDIT_TODOS_REQUEST = 'todos/EDIT_TODOS_REQUEST' as const;
export const EDIT_TODOS_SUCCESS = 'todos/EDIT_TODOS_SUCCESS' as const;
export const EDIT_TODOS_FAILURE = 'todos/EDIT_TODOS_FAILURE' as const;

export const REMOVE_TODOS_REQUEST = 'todos/REMOVE_TODOS_REQUEST' as const;
export const REMOVE_TODOS_SUCCESS = 'todos/REMOVE_TODOS_SUCCESS' as const;
export const REMOVE_TODOS_FAILURE = 'todos/REMOVE_TODOS_FAILURE' as const;

const initialState = {
  count: 3,
  todoState: [
    {
      id: '1',
      content: '리덕스 해보기',
      isCheck: true,
      createdAt: 'Sun Mar 25 2021',
    },
    {
      id: '2',
      content: '컴포넌트 스타일링해 보기',
      isCheck: true,
      createdAt: 'Sun Mar 25 2021',
    },
    {
      id: '3',
      content: '일정 관리 앱 만들어 보기',
      isCheck: false,
      createdAt: 'Sun Mar 25 2021',
    },
  ],
};

const dummydata = (data: Todo) => ({
  id: data.id,
  content: data.content,
  isCheck: data.isCheck,
  createdAt: data.createdAt,
});

export const addTodoAction = (data: string) => ({
  type: ADD_TODOS_REQUEST,
  data,
});

export const toggleTodoAction = (id: string) => ({
  type: TOGGLE_TODOS_REQUEST,
  id,
});

export const editTodoAction = (data: string) => ({
  type: EDIT_TODOS_REQUEST,
  data,
});

export const removeTodoAction = (id: string) => ({
  type: REMOVE_TODOS_REQUEST,
  id,
});

function todos(state = initialState, action: any): any {
  switch (action.type) {
    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        count: state.todoState.length + 1,
        todoState: [...state.todoState, dummydata(action.data)],
      };

    case TOGGLE_TODOS_SUCCESS:
      return {
        ...state,
        todoState: state.todoState.map(todo =>
          todo.id === action.id ? { ...todo, isCheck: !todo.isCheck } : todo,
        ),
      };
    case EDIT_TODOS_SUCCESS:
      return {
        ...state,
        todoState: state.todoState.map(todo =>
          todo.id === action.data.id
            ? { ...todo, content: action.data.content }
            : todo,
        ),
      };
    case REMOVE_TODOS_SUCCESS:
      return {
        ...state,
        count: state.todoState.length - 1,
        todoState: state.todoState.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;

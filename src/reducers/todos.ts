export const ADD_TODOS_REQUEST = 'todos/ADD_TODOS_REQUEST';
export const ADD_TODOS_SUCCESS = 'todos/ADD_TODOS_SUCCESS';
export const ADD_TODOS_FAILURE = 'todos/ADD_TODOS_FAILURE';

export const TOGGLE_TODOS_REQUEST = 'todos/TOGGLE_TODOS_REQUEST';
export const TOGGLE_TODOS_SUCCESS = 'todos/TOGGLE_TODOS_SUCCESS';
export const TOGGLE_TODOS_FAILURE = 'todos/TOGGLE_TODOS_FAILURE';

export const REMOVE_TODOS_REQUEST = 'todos/REMOVE_TODOS_REQUEST';
export const REMOVE_TODOS_SUCCESS = 'todos/REMOVE_TODOS_SUCCESS';
export const REMOVE_TODOS_FAILURE = 'todos/REMOVE_TODOS_FAILURE';

const initialState = {
  count: 3,
  todoState: [
    {
      id: '1',
      content: '리덕스 해보기',
      isCheck: true,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
    {
      id: '2',
      content: '컴포넌트 스타일링해 보기',
      isCheck: true,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
    {
      id: '3',
      content: '일정 관리 앱 만들어 보기',
      isCheck: false,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
  ],
};

const dummydata = (data: any) => ({
  id: data.id,
  content: data.content,
  isCheck: data.isCheck,
  createdAt: data.createdAt,
});

export const addTodo = (data: any) => ({
  type: ADD_TODOS_REQUEST,
  data,
});

export const toggleTodoAction = (id: string) => ({
  type: TOGGLE_TODOS_REQUEST,
  id,
});

export const removeTodoAction = (id: string) => ({
  type: REMOVE_TODOS_REQUEST,
  id,
});

function todos(state = initialState, action: any): any {
  switch (action.type) {
    case ADD_TODOS_REQUEST:
      return {
        ...state,
      };
    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        todoState: [...state.todoState, dummydata(action.data)],
      };
    case ADD_TODOS_FAILURE:
      return {
        ...state,
      };
    case TOGGLE_TODOS_REQUEST:
      return {
        ...state,
        todoState: state.todoState.map(todo =>
          todo.id === action.id ? { ...todo, isCheck: !todo.isCheck } : todo,
        ),
      };
    case REMOVE_TODOS_REQUEST:
      return {
        ...state,
      };
    case REMOVE_TODOS_SUCCESS:
      return {
        ...state,
        todoState: state.todoState.filter(todo => todo.id !== action.data),
      };
    case REMOVE_TODOS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default todos;

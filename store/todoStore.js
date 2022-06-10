import { useDispatch } from 'react-redux';
import { getTodos } from '../api';

const ACTION_FETCH_TODOS_START = 'ACTION_FETCH_TODOS_START';
const ACTION_FETCH_TODOS_COMPLETE = 'ACTION_FETCH_TODOS_COMPLETE';
// const ACTION_FETCH_TODOS_FAILED = 'ACTION_FETCH_TODOS_FAILED';

const ACTION_CREATE_TASK = 'ACTION_CREATE_TASK';
const ACTION_FINISH_TASK = 'ACTION_FINISH_TASK';
const ACTION_UNFINISH_TASK = 'ACTION_UNFINISH_TASK';
const ACTION_REMOVE_TASK = 'ACTION_REMOVE_TASK';

// action creators
const fetchTodosStartAction = () => ({ type: ACTION_FETCH_TODOS_START });
const fetchTodosCompleteAction = (payload) => ({
  type: ACTION_FETCH_TODOS_COMPLETE,
  payload,
});
const finishTaskAction = (id) => ({
  type: ACTION_FINISH_TASK,
  payload: { id },
});
const unFinishTaskAction = (id) => ({
  type: ACTION_UNFINISH_TASK,
  payload: { id },
});
const removeTaskAction = (id) => ({
  type: ACTION_REMOVE_TASK,
  payload: { id },
});
const createTask = (payload) => ({
  type: ACTION_CREATE_TASK,
  payload,
});

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FETCH_TODOS_START:
      return {
        ...state,
        isLoading: true,
        data: [],
      };

    case ACTION_FETCH_TODOS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case ACTION_CREATE_TASK:
      const newTask = {
        ...action.payload,
        id: Math.max(...state.data.map((t) => t.id)) + 1,
      };

      return {
        ...state,
        data: [newTask, ...state.data],
      };

    case ACTION_REMOVE_TASK:
      return {
        data: state.data.filter((t) => t.id !== action.payload.id),
      };

    case ACTION_FINISH_TASK:
      return {
        ...state,
        data: state.data.map((t) => ({
          ...t,
          completed: t.id === action.payload.id ? true : t.completed,
        })),
      };

    case ACTION_UNFINISH_TASK:
      return {
        ...state,
        data: state.data.map((t) => ({
          ...t,
          completed: t.id === action.payload.id ? false : t.completed,
        })),
      };
  }

  return state;
};

// middleware
export const useTaskActions = () => {
  const dispatch = useDispatch();

  return {
    fetchTodos: () => {
      dispatch(fetchTodosStartAction());
      getTodos()
        .then((res) => {
          dispatch(fetchTodosCompleteAction(res.data));
        })
        .catch(() => {
          // TODO: catch failed state
          dispatch(fetchTodosCompleteAction([]));
        });
    },

    finishTask: (id) => {
      dispatch(finishTaskAction(id));
    },

    unFinishTask: (id) => {
      dispatch(unFinishTaskAction(id));
    },

    addTask: (title, userId, completed = false) => {
      dispatch(
        createTask({
          title,
          userId,
          completed,
        })
      );
    },

    removeTask: (id) => {
      dispatch(removeTaskAction(id));
    },
  };
};

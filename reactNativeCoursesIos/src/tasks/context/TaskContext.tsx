import React, {createContext, useReducer} from 'react';
import {
  TaskListState,
  TaskListContextProps,
  TaskListAction,
  Task,
} from './TaskContext.types';
// intitialState contiene un valor tipo TaskListState, que contiene TaskList, las cuales contienen Task
const initialState: TaskListState = {
  lastId: 7,
  tasksLists: [
    {id: 1, isDone: false, isFav: false, title: 'Sacar la bbasura'},
    {id: 2, isDone: false, isFav: true, title: 'Sacar la bbasurax2'},
    {id: 3, isDone: false, isFav: false, title: 'Sacar la bbasurax3'},
  ],
  // inProgressTasks: [],
  doneTasks: [
    {id: 4, isDone: true, isFav: false, title: 'Sacar la bbasura4'},
    {id: 5, isDone: true, isFav: true, title: 'Sacar la bbasurax5'},
    {id: 6, isDone: true, isFav: false, title: 'Sacar la bbasurax6'},
  ],
};

const taskReducer = (
  state: TaskListState,
  action: TaskListAction,
): TaskListState => {
  let list: {key: string; value: Task[]};

  const filterList = (
    isDone: boolean,
    listState: TaskListState,
  ): {key: string; value: Task[]} => {
    return isDone
      ? {key: 'doneTasks', value: listState.doneTasks}
      : {key: 'tasksLists', value: listState.tasksLists};
  };

  switch (action.type) {
    case 'toggleFavorite':
      list = filterList(action.payload.isDone, state);
      return {
        ...state,
        [list.key]: list.value.map((item: Task) => {
          if (item.id === action.payload.id) {
            item.isFav = !item.isFav;
          }
          return item;
        }),
      };

    case 'toggleList':
      list = filterList(action.payload.isDone, state);
      state[!action.payload.isDone ? 'doneTasks' : 'tasksLists'].push({
        ...action.payload,
        isDone: !action.payload.isDone,
      });
      return {
        ...state,
        [list.key]: list.value.filter(
          (item: Task) => item.id !== action.payload.id,
        ),
      };

    case 'deleteTask':
      list = filterList(action.payload.isDone, state);
      return {
        ...state,
        [list.key]: list.value.filter(
          (item: Task) => item.id !== action.payload.id,
        ),
      };

    case 'createTask':
      const task: Task = {
        id: state.lastId,
        title: action.payload,
        isDone: false,
        isFav: false,
      };
      state.tasksLists.push(task);
      return {
        ...state,
        lastId: 1 + state.lastId,
      };
    default:
      return state;
  }
};

export const TaskListContext = createContext({} as TaskListContextProps);

export const TaskListProvider = ({children}: {children: JSX.Element}) => {
  // const [state, dispatch] = useReducer(taskReducer, initialState);
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const createTask = (task: string) => {
    dispatch({type: 'createTask', payload: task});
  };
  const toggleFavorite = (task: Task) => {
    dispatch({type: 'toggleFavorite', payload: task});
  };
  const toggleList = (task: Task) => {
    dispatch({type: 'toggleList', payload: task});
  };
  const deleteTask = (task: Task) => {
    dispatch({type: 'deleteTask', payload: task});
  };
  return (
    <TaskListContext.Provider
      value={{
        state,
        createTask,
        toggleFavorite,
        toggleList,
        deleteTask,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};

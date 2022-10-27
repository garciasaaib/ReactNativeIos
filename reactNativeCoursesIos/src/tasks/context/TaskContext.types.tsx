// es un objeto con valores de task
export interface Task {
  id: number;
  title: string;
  isDone: boolean;
  isFav: boolean;
}

// es un objeto con las tasks en un array
// export interface TaskList {
//   id: number;
//   title: string;
//   tasksList: Task[];
// }

// es un objeto que contiene un obj tasks acomodoadas las tasklist por nombre
export interface TaskListState {
  lastId: number;
  tasksLists: Task[];
  doneTasks: Task[];
}

// el contexto manejara este tipo de data
export interface TaskListContextProps {
  state: TaskListState;
  createTask: (task: string) => void;
  toggleFavorite: (task: Task) => void;
  toggleList: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

// actions
export type TaskListAction =
  | {type: 'createTask'; payload: string}
  | {type: 'toggleFavorite'; payload: Task}
  | {type: 'toggleList'; payload: Task}
  | {type: 'deleteTask'; payload: Task};

import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../Tasks";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasksEdit, setTasksEdit] = useState({
    item: {},
    edit: false,
  });

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "this item is from db 1",
      rating: 10,
    },
    {
      text: "updating on both fe and be",
      rating: 8,
      id: 2,
    },
    {
      text: "new review from frontend",
      rating: 10,
      id: 4,
    },
    {
      text: "hello again reviewer",
      rating: 8,
      id: 5,
    },
  ]);

  const updateTasks = (id, updItem) => {
    setTasks(
      tasks.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const editTasks = (item) => {
    setTasksEdit({
      item,
      edit: true,
    });
  };

  const deleteTasks = (id) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      setTasks(tasks.filter((item) => item.id !== id));
    }
  };

  const addTasks = (newTasks) => {
    newTasks.id = uuidv4();
    setTasks([newTasks, ...tasks]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        deleteTasks,
        addTasks,
        editTasks,
        tasksEdit,
        updateTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
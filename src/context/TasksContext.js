import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
//   const [tasksEdit, setTasksEdit] = useState({
//     item: {},
//     edit: false,
//   });

  const [tasks, setTasks] = useState([
    {
        id: "TRE-1",
        owner: "Ahmed Salem",
        content:
          "Creating common interface for the api to us any scraping implementation",
        column: "Backlog",
      },
      {
        id: "TRE-2",
        owner: "Mina Fady",
        content: "credit limit estimator",
        column: "Backlog",
      },
      {
        id: "TRE-3",
        owner: "Omar Nader",
        content: "Api Organization and Documentation",
        column: "Backlog",
      },
      { id: "TRE-4", owner: "Mirna Assem", content: "Credit Limit ml", column: "Backlog" },
      {
        id: "TRE-5",
        owner: "Mahmoud Fathy",
        content: "Evaluate invoice AI",
        column: "Backlog",
      },
  ]);

  const columnsData = {
    "Backlog": {
      name: "Backlog",
      items: [tasks],
    },
    "To do": {
      name: "To do",
      items: [],
    },
    "In Progress": {
      name: "In Progress",
      items: [],
    },
    "In Review": {
      name: "In Review",
      items: [],
    },
    "Done": {
      name: "Done",
      items: [],
    },
  }

//   const updateTasks = (id, updItem) => {
//     setTasks(
//       tasks.map((item) => (item.id === id ? { ...item, ...updItem } : item))
//     );
//   };

//   const editTasks = (item) => {
//     setTasksEdit({
//       item,
//       edit: true,
//     });
//   };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      setTasks(tasks.filter((item) => item.id !== id));
    }
  };

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTasks([newTask, ...tasks]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        columnsData,
        deleteTask,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
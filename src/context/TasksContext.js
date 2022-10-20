import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const [tasks, setTasks] = useState([
    {
      id: "TRE-1",
      owner: "Ahmed Salem",
      content: "Creating interface for the api to us any scraping implementation",
      column: "Backlog",
      priority: 8,
    },
    {
      id: "TRE-2",
      owner: "Mina Fady",
      content: "credit limit estimator",
      column: "Backlog",
      priority: 5,
    },
    {
      id: "TRE-3",
      owner: "Omar Nader",
      content: "Api Organization and Documentation",
      column: "Backlog",
      priority: 1,
    },
    {
      id: "TRE-4",
      owner: "Mirna Assem",
      content: "Credit Limit ml",
      column: "Backlog",
      priority: 2,
    },
    {
      id: "TRE-5",
      owner: "Mahmoud Fathy",
      content: "Evaluate invoice AI",
      column: "Backlog",
      priority: 2,
    },
    {
      id: "TRE-6",
      owner: "Ahmed Salem",
      content: "Use Torch hub for Yolo",
      column: "Backlog",
      priority: 3,
    },
    {
      id: "TRE-7",
      owner: "Yasser Rady",
      content: "Migrate Data from old invoice tables to new one",
      column: "Backlog",
      priority: 4,
    },
    {
      id: "TRE-8",
      owner: "Salah Mohamed",
      content: "Multiple financial files",
      column: "Backlog",
      priority: 7,
    },
    {
      id: "TRE-9",
      owner: "Ahmed Taha",
      content: "Backend",
      column: "Backlog",
      priority: 9,
    },
    {
      id: "TRE-10",
      owner: "Bassem Soliman",
      content: "Enhance Frontend",
      column: "Backlog",
      priority: 10,
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
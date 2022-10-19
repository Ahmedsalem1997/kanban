const tasks = [
  {
    id: "TRE-1",
    owner: "Ahmed Salem",
    content:
      "Creating common interface for the api to us any scraping implementation",
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
  { id: "TRE-4", owner: "Mirna Assem", content: "Credit Limit ml", column: "Backlog" },
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
];

const data = {
  tasks: {
    "task-1": {
      id: "TRE-1",
      content:
        "Creating common interface for the api to us any scraping implementation",
      column: "Backlog",
    },
    "task-2": {
      id: "TRE-2",
      content: "credit limit estimator",
      column: "Backlog",
    },
    "task-3": {
      id: "TRE-3",
      content: "Api Organization and Documentation",
      column: "Backlog",
    },
    "task-4": { id: "TRE-4", content: "Credit Limit ml", column: "Backlog" },
    "task-5": {
      id: "TRE-5",
      content: "Evaluate invoice AI",
      column: "Backlog",
    },
    "task-6": {
      id: "TRE-6",
      content: "Use Torch hub for Yolo",
      column: "Backlog",
    },
    "task-7": {
      id: "TRE-7",
      content: "Migrate Data from old invoice tables to new one",
      column: "Backlog",
    },
    "task-8": {
      id: "TRE-8",
      content: "Multiple financial files",
      column: "Backlog",
    },
    "task-9": {
      id: "TRE-9",
      content: "Backend",
      column: "Backlog",
    },
    "task-19": {
      id: "TRE-10",
      content: "Enhance Frontend",
      column: "Backlog",
    },
  },

  columns: {
    "Backlog": {
      name: "Backlog",
      items: tasks,
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
  },
};

export default data;

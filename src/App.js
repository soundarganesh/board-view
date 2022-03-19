import { NavBarComponent } from "./components/navbar";
import { BoardViewComponent } from "./components/boardview";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="appContainer">
        <NavBarComponent />
        <BoardViewComponent listData={listData} />
      </div>
    </div>
  );
}

export default App;

const listData = [
  {
    id: 1,
    title: "Issue 1",
    description: "Financial and growth data",
    priority: "High",
    category: "Resources",
  },
  {
    id: 2,
    title: "Issue 2",
    description: "Goals and api's",
    priority: "Low",
    category: "Resources",
  },

  {
    id: 3,
    title: "Issue 3",
    description: "Brand Guide",
    priority: "Medium",
    category: "Resources",
  },

  {
    id: 4,
    title: "Issue 4",
    description: "Employee Manual",
    priority: "High",
    category: "Resources",
  },
  {
    id: 1,
    title: "Issue 5",
    description: "Financial and growth data",
    priority: "High",
    category: "ToDo",
  },
  {
    id: 2,
    title: "Issue 6",
    description: "Goals and api's",
    priority: "Low",
    category: "ToDo",
  },

  {
    id: 3,
    title: "Issue 7",
    description: "Brand Guide",
    priority: "Medium",
    category: "ToDo",
  },

  {
    id: 4,
    title: "Issue 8",
    description: "Employee Manual",
    priority: "High",
    category: "ToDo",
  },
  {
    id: 1,
    title: "Issue 9",
    description: "Financial and growth data",
    priority: "High",
    category: "Doing",
  },
  {
    id: 2,
    title: "Issue 10",
    description: "Goals and api's",
    priority: "Low",
    category: "Doing",
  },

  {
    id: 3,
    title: "Issue 11",
    description: "Brand Guide",
    priority: "Medium",
    category: "Doing",
  },

  {
    id: 4,
    title: "Issue 12",
    description: "Employee Manual",
    priority: "High",
    category: "Doing",
  },
  {
    id: 1,
    title: "Issue 13",
    description: "Financial and growth data",
    priority: "High",
    category: "Done",
  },
  {
    id: 2,
    title: "Issue 14",
    description: "Goals and api's",
    priority: "Low",
    category: "Done",
  },

  {
    id: 3,
    title: "Issue 15",
    description: "Brand Guide",
    priority: "Medium",
    category: "Done",
  },

  {
    id: 4,
    title: "Issue 16",
    description: "Employee Manual",
    priority: "High",
    category: "Done",
  },
];

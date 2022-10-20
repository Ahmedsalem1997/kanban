import React from "react";
import "./App.css";
import data from "./Tasks";
import DragList from "./DragList";

function App() {

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <>
      <h1 className="logo">Kanban Board</h1>
      <div className="buttons-container">
        <button className="btn" type="button">
          Import Data
        </button>
        <button className="btn" type="button" onClick={exportData}>
          Export Data
        </button>
      </div>
      <DragList data={data.columns}/>
    </>
  );
}

export default App;

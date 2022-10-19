import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./App.css";
import styled from "styled-components";
import data from "./Tasks";
import ListItem from "./ListItem";

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0 15px;
`;

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function App() {
  const [columns, setColumns] = useState(data.columns);

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
      <ListGrid>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="list-grid" key={columnId}>
                <div className="column-container">
                  <div className="column-header">
                    {column.name}{" "}
                    <span className="count">{column.items.length}</span>
                  </div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: 0,
                            width: 280,
                            minHeight: 500,
                          }}
                        >
                          {column.items
                            .sort((a, b) => b.priority - a.priority)
                            .map((item, index) => {
                              return (
                                <ListItem
                                  item={item}
                                  index={index}
                                  key={item.id}
                                />
                              );
                            })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </ListGrid>
    </>
  );
}

export default App;

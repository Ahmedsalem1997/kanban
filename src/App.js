import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './App.css';
import { generateFromString } from "generate-avatar";
import styled from "styled-components";
import data from "./Tasks";

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0 15px;
`;

const Avatar = styled.img`
  height: 22px;
  width: 22px;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  font-weight: 500;
`;

const ItemId = styled.span`
  font-size: 14px;
  color: #6b7077;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #27282b;
  margin: 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
  min-width: 250px;
`;


// const columnsFromBackend = {
//   [uuid()]: {
//     name: "Backlog",
//     items: []
//   },
//   [uuid()]: {
//     name: "To do",
//     items: []
//   },
//   [uuid()]: {
//     name: "In Progress",
//     items: []
//   },
//   [uuid()]: {
//     name: "In Review",
//     items: []
//   },
//   [uuid()]: {
//     name: "Done",
//     items: []
//   }
// };

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
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
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
        items: copiedItems
      }
    });
  }
};

function App() {
  const [columns, setColumns] = useState(data.columns);
  return (
    <ListGrid>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              className="list-grid"
              key={columnId}
            >
              <div className="column-container">
                <h3>{column.name}</h3>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          padding: 0,
                          width: 280,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <DragItem
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                  <CardHeader>
                                    <ItemId>{item.id}</ItemId>
                                    <Author>
                                      <Avatar
                                        src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
                                      />
                                    </Author>
                                  </CardHeader>
                                    {item.content}
                                  <CardFooter>...</CardFooter>
                                  </DragItem>
                                );
                              }}
                            </Draggable>
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
  );
}

export default App;

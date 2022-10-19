import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import { generateFromString } from "generate-avatar";
import React, { useMemo } from "react";
import styled from "styled-components";

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
`;

const lorem = new LoremIpsum();

const ListItem = ({ item, index }) => {
  const randomHeader = useMemo(() => lorem.generateWords(5), []);

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader>
              <ItemId>{item.content}</ItemId>
              <Author>
                <Avatar
                  src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
                />
              </Author>
            </CardHeader>
            {randomHeader}
            <CardFooter>...</CardFooter>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;

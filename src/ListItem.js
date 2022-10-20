import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Avatar from 'react-avatar';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from "@mui/material";
// import TasksContext from "./context/TasksContext";


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



const ListItem = ({ item, index }) => {

  // const { deleteTask } = useContext(TasksContext)
  const [open, setOpen] = React.useState(false);
  const priorityRate = item.priority;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
              onClick={handleClickOpen}
            >
              <CardHeader>
                <ItemId>{item.id}</ItemId>
                <Author>
                  <Avatar name={item.owner} size={30} round alt={item.owner} />
                </Author>
              </CardHeader>
              {item.title}
              <CardFooter>...</CardFooter>
            </DragItem>
          );
        }}
      </Draggable>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: 'black',
        }}>
        <DialogTitle><Avatar name={item.owner} size={35} round alt={item.owner} /> {item.id} / {item.title}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography component={'span'} variant={'body2'}>
              <span></span>
              Assigne: {item.owner}  <br />
              Priority : {priorityRate < 2 ? 'No Prior' : priorityRate < 5 ? 'Low' : priorityRate < 9 ? 'High' : 'Highest'} <br />
              Task Details :- <br />
              {item.description}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={() => deleteTask(item.id)} variant="contained" color="error">Delete</Button> */}
          <Button onClick={handleClose} variant="contained">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListItem;

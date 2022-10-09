import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
 import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from '@mui/material';
import { Todo } from './todo';
        
interface NewTodoProps{
    setTodoList: (todo:Todo[]) => void;
    todoList?: any;
}
export  function NewTodo(props: NewTodoProps) {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState<string>();
    const [description, setDescrption] = React.useState<string>();
        
    const handleClickOpen = () => {
        setOpen(true);
    };
        
    const addNew = () => {
        console.log(props.todoList);
        props.setTodoList([...props.todoList,{
            id: props.todoList!.length + 1, 
            title: title == undefined ? '' : title, 
            description: description == undefined ? '' :  description, status: 'pending'
        } ]);
        setOpen(false);
    };
        
    return (
        <div>
            <br/>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New 
            </Button>
            <Dialog open={open} onClose={addNew}>
                <DialogTitle>Add new Task</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    placeholder='Title'
                    variant="standard"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                <br/>
                <TextareaAutosize
                    minRows={4}
                    maxRows={10}
                    aria-label="maximum height"
                    placeholder="Description"
                    style={{ width: 216 }}
                    value={description}
                    onChange={(e)=>setDescrption(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                  <Button onClick={addNew}>Add</Button>
                </DialogActions>
              </Dialog>
            </div>
          );
        }      



import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Task } from './tasks';


export interface Todo {
    id: number;
    title: string;
    description: string;
    status: string;
}

export const enum status {
    Pending = 'pending',
    Completed = 'completed',
}
export function TodoGet() {

    const [todoList, setTodoList] = useState<Todo[]>();

    useEffect(()=>{
        axios.get<Todo[]>(`https://localhost:44378/api/Todo`)
        .then((res) => {
            setTodoList(res.data);
        })
        .catch((err) => {
            console.log("error getting post code");
        });
    },[]);


    return(
        <div className='row'>
            <div className='column'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="black" bgcolor='yellow' gutterBottom>
                        Pending Task
                    </Typography>
                    <Task todoList={todoList} status={status.Pending}/>
                </CardContent>
            </Card>
            </div>
            <div className='column'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="black" bgcolor='greenyellow' gutterBottom>
                        Completed Task
                    </Typography>
                    <Task todoList={todoList} status={status.Completed}/>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
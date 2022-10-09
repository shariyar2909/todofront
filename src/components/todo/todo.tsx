import { TodoGet } from './todo-get';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Todo {
    id: number;
    title: string;
    description: string;
    status: string;
}
export function TodoList() {

    const [todoList, setTodoList] = useState<Todo[]>();

    useEffect(()=>{
        axios.get<Todo[]>(`https://localhost:44378/api/Todo`)
        .then((res) => {
            setTodoList(res.data);
        })
        .catch((err) => {
            console.log("error getting data");
        });
    },[]);

    return(
        <div className='container'>
            <div className="topnav">
                <h1 className="p-2"> TODO List</h1>
            </div>
            <TodoGet todoList={todoList} setTodoList={setTodoList}/>
        </div>
        
    );
}
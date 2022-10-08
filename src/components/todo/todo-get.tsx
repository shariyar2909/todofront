import axios from 'axios';
import {useEffect, useState} from 'react';

export function TodoGet() {

    interface Todo {
        id: number;
        title: string;
        description: string;
        status: string;
    }
    const enum status {
        Pending = 'pending',
        Completed = 'completed',
    }

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
            <div className='column'>Pending Task
                {todoList?.map(item => (
                    item.status === status.Pending &&
                    <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                    </tr>
                ))}
            </div>
            <div className='column'> Completed Task
                    {todoList?.map(item => (
                        item.status === status.Completed &&
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
            </div>
        </div>
    );
}
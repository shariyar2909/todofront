import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Task } from './tasks';
import { Todo } from './todo';




export const enum status {
    Pending = 'pending',
    Completed = 'completed',
}
interface todoGetPros{
    todoList?:Todo[];
    setTodoList:(todo:Todo[]) => void;
}
export function TodoGet(props: todoGetPros) {
    return(
        <div className='row'>
            <div className='column'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="black" bgcolor='yellow' gutterBottom>
                        Pending Task
                    </Typography>
                    <Task todoList={props.todoList} status={status.Pending} updateListState={props.setTodoList}/>
                </CardContent>
            </Card>
            </div>
            <div className='column'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="black" bgcolor='greenyellow' gutterBottom>
                        Completed Task
                    </Typography>
                    <Task todoList={props.todoList} status={status.Completed} updateListState={props.setTodoList}/>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
import { TodoGet } from './todo-get';
export function TodoList() {

    return(
        <div className='container'>
            <div className="topnav">
                <h1 className="p-2"> TODO List</h1>
            </div>
            <TodoGet/>
        </div>
        
    );
}
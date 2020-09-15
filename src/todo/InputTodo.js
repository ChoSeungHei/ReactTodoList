import React,{useState} from 'react';
import TodoList from './TodoList';

const InputTodo = () => {
    const [todoText,setTodoText] = useState('');
    const [todoTexts,setTodoTexts] = useState([]);

    const handleSubmit = () => {
        setTodoTexts(todoTexts=>[...todoTexts,{text: todoText,flag: false}]);
        setTodoText('');
    }
    
    const changeTodo = (e) => {
        setTodoText(e.target.value);
    }

    return(
        <div>
            <input onChange={changeTodo} value={todoText}/>
            <button onClick={handleSubmit}>등록</button>
            <TodoList todoTexts={todoTexts}/>
        </div>
    );
}

export default InputTodo;
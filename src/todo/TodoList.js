import React,{useState,useEffect} from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    const [todoAry,setTodoAry] = useState([]);
    
    const printTodoList = props.todoTexts.map((ary,index)=>(<TodoItem key={index} text={ary.text} flag={ary.flag}/>))

    return(
        <div>{printTodoList}</div>
    );
}

export default TodoList;
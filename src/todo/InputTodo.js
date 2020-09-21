import React,{useState,useEffect} from 'react';
import TodoList from './TodoList';
import styled from 'styled-components';
import reset from 'styled-reset';

const Container = styled.div`
    margin: 0;
    height: 100%;
    width: 100%;
    text-align:left;
    @media(min-width:768px)
    {
        text-align:center;
    }
`;

const InputBox = styled.input`
    border: none;
    height: 40px;
    width : 85%;
    line-height: 40px;
    outline:none;
    padding-left: 3px;
    padding-rignt: 3px;
    margin: 0;

    @media(min-width:768px)
    {
        width : 90%;
    }
`;

const SubmitBtn = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    color: #78B6FF;
    font-weight: 800;
    width: 10%;
    margin-left: 2%;
    &:hover {
    color: #1981FF;
    }
    &:focus {
        outline: none;
    }
    @media(min-width:768px)
    {
        width: 9%;
        margin-left: 1%;
    }
`;

const InputTodo = () => {
    const [todoText,setTodoText] = useState('');
    const [todoTexts,setTodoTexts] = useState([]);
    const [id,setId] = useState(0);

    useEffect(()=>{
        var temp = JSON.parse(localStorage.getItem('TODO_VALUES'));
        var todo_id = localStorage.getItem('TODO_ID');
        console.log(todo_id);

        if(temp !== null)
        {
            setTodoTexts(temp);
            setId(todo_id);
        }
    },[]);

    const handleSubmit = () => {
        if(todoText != "")
        {
            setTodoTexts(todoTexts=>[...todoTexts,{id:id ,text: todoText,flag: false,remove: false}]);
            setTodoText('');
            var temp = id;
            setId(++temp);

            var ary = [...todoTexts,{id:id ,text: todoText,flag: false,remove: false}];

            localStorage.removeItem('TODO_VALUES');
            localStorage.setItem('TODO_VALUES', JSON.stringify(ary));

            localStorage.removeItem('TODO_ID');
            localStorage.setItem('TODO_ID',++temp);
        }
    }

    const removeItem = (id) => {
        setTodoTexts(todoTexts.map(todo => todo.id == id ? ({...todo, remove: true}):todo));
        setTimeout(() => {
            setTodoTexts(todoTexts.filter(todo => todo.id !== id));
            var temp = todoTexts.filter(todo => todo.id !== id);

            localStorage.removeItem('TODO_VALUES');
            localStorage.setItem('TODO_VALUES',JSON.stringify(temp));
        }, 500);
    }

    const handleCheck = (id) => {
        setTodoTexts(todoTexts.map(todo => todo.id == id ? ({...todo, flag: !todo.flag}):todo));

        var temp = todoTexts.map(todo => todo.id == id ? ({...todo, flag: !todo.flag}):todo);
        localStorage.removeItem('TODO_VALUES');
        localStorage.setItem('TODO_VALUES',JSON.stringify(temp));
    }
    
    const changeTodo = (e) => {
        setTodoText(e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter')
        {
            handleSubmit();
        }
    }

    return(
        <Container>
            <InputBox maxlength="10" placeholder="Input Text" autoFocus onChange={changeTodo} value={todoText} onKeyPress={onKeyPress}/>
            <SubmitBtn onClick={handleSubmit}>ADD</SubmitBtn>
            <TodoList todoTexts={todoTexts} removeItem={removeItem} handleCheck={handleCheck}/>
        </Container>
    );
}


export default InputTodo;
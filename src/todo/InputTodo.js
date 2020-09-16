import React,{useState} from 'react';
import TodoList from './TodoList';
import styled from 'styled-components';
import reset from 'styled-reset';

const Container = styled.div`
    margin: 0;
    height: 100%;
    width: 100%;
`;

const InputBox = styled.input`
    border: none;
    height: 10%;
    width: 90%;
    line-height: 40px;
    outline:none;
    padding-left: 3px;
    padding-rignt: 3px;
    margin: 0;
`;

const SubmitBtn = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    color: #78B6FF;
    font-weight: 800;
    width: 9%;
    margin-left: 1%;
    &:hover {
    color: #1981FF;
    }
    &:focus {
        outline: none;
    }
`;

const InputTodo = () => {
    const [todoText,setTodoText] = useState('');
    const [todoTexts,setTodoTexts] = useState([]);
    const [id,setId] = useState(0);

    const handleSubmit = () => {
        setTodoTexts(todoTexts=>[...todoTexts,{id:id ,text: todoText,flag: false}]);
        setTodoText('');
        var temp = id;
        setId(++temp);
    }

    const removeItem = (id) => {
        //요소 삭제
        setTodoTexts(todoTexts.filter(todo => todo.id !== id))
    }
    
    const changeTodo = (e) => {
        setTodoText(e.target.value);
    }

    return(
        <Container>
            <InputBox maxlength="10" placeholder="Input Text" onChange={changeTodo} value={todoText}/>
            <SubmitBtn onClick={handleSubmit}>ADD</SubmitBtn>
            <TodoList todoTexts={todoTexts} removeItem={removeItem}/>
        </Container>
    );
}


export default InputTodo;
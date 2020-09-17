import React,{useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Container  = styled.div`
    with: 100%;
    height: 70%;
    margin-top: 3%;
    background-color: rgb(255,255,255);
    overflow:auto;
`;

const TodoList = props => {
    const {todoTexts, removeItem,handleCheck} = props;
    
    const printTodoList = todoTexts.map((ary,index)=>(<TodoItem key={index} id={ary.id} text={ary.text} flag={ary.flag} removeItem={removeItem} remove={ary.remove} handleCheck={handleCheck}/>))


    return(
        <Container>{printTodoList}</Container>
    );
}

export default TodoList;
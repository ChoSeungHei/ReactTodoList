import React,{useState, useEffect} from 'react';
import InputTodo from './InputTodo';
import styled, { createGlobalStyle }  from 'styled-components';
import reset from 'styled-reset';

const Container = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    width: 40%; height: 45%;
    margin-left: -20%;
    margin-top: -15%;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.8);
    
    color:#555;
`;

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    @font-face{
        font-family:"NanumGothic";
        font-weight: normal;
        src: url("../font/NanumGothic.woff") format("woff");
    }
    body {
        font-family: "NanumGothic";
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: linear-gradient( to bottom, #FF4A4F, #FF5C7D );
        background-size: cover;
    }
`;

const DateTitle = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align:center;
`;

const Title = styled.div`
    font-size: 1.5rem; 
    margin-bottom: 10px;
    font-weight: 600;
    text-align:center;
`;
const Template = () => {
    const [today,setToday] = useState('');

    useEffect(()=>{
        setToday(getToday());
    });


    const getToday = () => {
        let today = new Date();  
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜

        return year+"."+month+"."+date;
    }

    return(
        
        <>
            <GlobalStyles/>
            <Container>
                <Title>To-Do List</Title>
                <DateTitle>{today}</DateTitle>
                <InputTodo/>
            </Container>
        </>
    );
}

export default Template;
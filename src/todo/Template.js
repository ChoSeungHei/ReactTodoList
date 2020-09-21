import React,{useState, useEffect} from 'react';
import InputTodo from './InputTodo';
import styled, { createGlobalStyle }  from 'styled-components';
import reset from 'styled-reset';

const Container = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    width: 90%; height: 450px;
    margin: -225px 0px 0px -45%;
    padding: 2%;
    background-color: rgba(255, 255, 255, 0.8);
    
    color:#555;
    @media(min-width:768px)
    {
        width: 40%; height: 450px;
        margin: -225px 0px 0px -20%;
    }
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
        background: linear-gradient( to bottom, #FF4A4F, #FF5C7D );
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

const Progress = styled.progress`
    text-align: left;
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

        if(month <10)
        {
            month = "0"+month;
        }
        if(date <10)
        {
            date = "0"+date;
        }
        return year+"."+month+"."+date;
    }

    return(
        
        <>
            <GlobalStyles/>
            <Progress value="22" max="100"/>
            <Container>
                <Title>To-Do List</Title>
                <DateTitle>{today}</DateTitle>
                <InputTodo/>
            </Container>
        </>
    );
}

export default Template;
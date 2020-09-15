import React,{useState, useEffect} from 'react';
import InputTodo from './InputTodo';

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
        <div>
            <div>
                {today}<br/>오늘의 할일
            </div>
            <InputTodo/>
        </div>
    );
}

export default Template;
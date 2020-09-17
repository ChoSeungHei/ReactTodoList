import React,{useState} from 'react';
import '../style/style.css';
import '../style/animate.css'
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';
import { IconContext } from "react-icons";

const TextLine = styled.span`
    text-decoration:line-through;
    margin-left: 5px;
`;

const Container = styled.div`
    display:flex;
    align-items:center;
    margin: 10px;
`
const TodoItem = (props) => {
    const {flag, removeItem, text, id} = props;

    const [state,setState] = useState(flag);

    const handleClick = () => {
        setState(!state);
    }

    return(
        <Container>
            <input type="checkbox" id={id} checked={state} onChange={handleClick}/>
                <label htmlFor={id}>
                    <div className="tick"></div>
                </label>
            {
                state ? (
                    <TextLine>{text}</TextLine>
                ):(<span>{text}</span>)
            }
            <IconContext.Provider value={{ color:"#555", size:"1.5em", className: "global-class-name" }}>
                <IoMdClose onClick={(e) => {
                e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                removeItem(id)}}/>
            </IconContext.Provider>
            
        </Container>
    );
}

export default TodoItem;
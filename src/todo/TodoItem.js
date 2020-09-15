import React,{useState} from 'react';

const TodoItem = (props) => {
    return(
        <div>
            {props.text}
            {
                props.flag ? (
                    <span>O</span>
                ):(<span>X</span>)
            }
        </div>
    );
}

export default TodoItem;
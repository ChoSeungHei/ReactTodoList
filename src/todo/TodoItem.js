import React,{useState} from 'react';
import '../style/style.css';
const TodoItem = (props) => {
    const {flag, removeItem, text, id} = props;

    const [state,setState] = useState(flag);

    const handleClick = () => {
        setState(!state);
    }

    return(
        <div>
            {
                state ? (
                    <span>O</span>
                ):(<span>X</span>)
            }
            {text}
            <button onClick={handleClick}>완료</button>
            <button onClick={(e) => {
                e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                removeItem(id)}}>삭제</button>
            <input type="checkbox" id={id} checked={state} onChange={handleClick}/>
            <label htmlFor={id}>
                <div className="tick"></div>
            </label>
        </div>
    );
}

export default TodoItem;
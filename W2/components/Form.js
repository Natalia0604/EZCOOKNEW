// import {firestore} from "../firebase-service.js";
import React from "react";

const Form = ({setInputText, todos, setTodos, inputText,key}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        let item={
            text: inputText,
            id:Math.random()*100
        };
        //將資料存到firestore中
        // firestore.collection("todo").doc(key).set(item).then(()=>{
        //     setTodos([...todos,item]);
        //     setInputText(""); //將搜尋框清空
        // }); 
    };
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler}  className="todo-button" type="submit">新增</button>
        </form>
    );
};
export default Form;
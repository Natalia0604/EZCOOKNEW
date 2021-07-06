import React from "react";
// import { firestore } from "../firebase-service";

const Todo = ({text, todo, todos, setTodos,key}) => {
    const deleteHandler = () => {
        // setTodos(todos.filter((el) => el.id !== todo.id));
        // firestore.collection("todo")
        // .doc(key)
        // .delete()
        // .then(() => console.log('Document successfully deleted!'))
    };
    return(
        <div className="todo">
            <li className="todo-item">{text}
            <button onClick={deleteHandler} className="delete-btn">刪除</button>
            </li>
        </div>
    );
};
export default Todo;
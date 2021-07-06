// import {firestore} from "../firebase-service.js";
import React,{useState,useEffect} from "react";
import Form from "./Form.js";
import Todo from "./Todo.js";
import {Link} from "react-router-dom";

function ListPage() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //在網站一載入時跟firestore要資料
  useEffect(()=>{
  //   firestore.collection("todo").get().then((querySnapshot)=>{
  //     let data=[];
  //     querySnapshot.forEach((doc)=>{
  //       data.push(doc.data());
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //     setTodos(data);
  //   });
  // },[true])
  })

  return (
    <div className="App">
      <header>
        <h1>待辦事項</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) =>(
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
      <div>
          <Link to="/">
              <button className="return_index_btn">返回首頁</button>
          </Link>
      </div>
    </div>
  );
}
export default ListPage

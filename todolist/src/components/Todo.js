import React from 'react'
import {useState} from "react";
const Todo = () => {
   const [todoList,setTodoList] = useState([
       {name : "This is my first task", checked : false},
       {name : "This is my second task", checked : true}]);

       const clickHandler = () => {
           let name = document.getElementById("text").value
           setTodoList(todoList.concat({name: name , checked :  false}))
            document.getElementById("text").value = ""
       }

       const changeStatus = (e,index) => {}


       const remove = (e,index) => {
           let newArr=[...todoList];
           newArr.splice(index,1);
        setTodoList(newArr);
      }
    return (
        <div>
            {
                todoList.map((item , index) => {
                   return <div key={index} >
                       {item.name}
                       <input type = "button" id={index} value ="Delete" onClick={(e) => remove(e,index)} />
                       <input type="checkbox" id={index} checked={item.checked} onClick={ (e,index) => changeStatus(index)} />
                       </div>


                })

            }
            <div>
                <textarea id="text"/>
                
                <input type="button" value="Add" onClick ={clickHandler} />

                


            </div>
        </div>
    )
}

export default Todo

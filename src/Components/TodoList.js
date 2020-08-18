import React  from 'react'
import TodoItem from './TodoItem'
const TodoList = ({ clearItems, items, handleDelete, handleEdit, handleComplete }) =>{

        return(
            <div className="container lc">
                <h1 
                className="title"
                style={{marginBottom:'30px'}}
                >Todo List</h1>
                   <div className="row list-row">
                        <ul className="list">
                           {items.map(item => <TodoItem
                            title = {item.title}
                            key = {item.id}
                            handleDelete = {()=>handleDelete(item.id)}
                            handleEdit = {()=>handleEdit(item.id)}
                            handleComplete = {()=>handleComplete(item)}
                            completed = {item.completed}
                           />)}
                            <button 
                                className="btn lbtn"
                                onClick={ clearItems }
                            >Clear List</button>
                        </ul>
                    </div>
            </div>
        )
}
export default TodoList
import React from 'react'

const TodoItem = ({ title, handleDelete, handleEdit, completed, handleComplete }) =>{

        return(
            <li className="list-item">
                <div className="row li-row">
                    <span className={completed ? "true" : "false"}>{title}</span>
                    <div className="actin-btn">
                        <i className="fa fa-pencil"
                           style={{color:"orange"}}
                           onClick={completed ? null : handleEdit}
                        ></i>
                        <i className="fa fa-trash" 
                           style={{color:"red"}}
                           onClick={completed ? null : handleDelete}    
                        ></i>
                        <i className="fa fa-check"
                           style={{color:"green"}}
                           onClick={completed ? null : handleComplete}
                        ></i>
                    </div>
                </div>
            </li>
        )
}
export default TodoItem
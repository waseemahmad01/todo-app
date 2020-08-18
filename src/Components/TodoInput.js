import React  from 'react'
import './Style.css'
const TodoInput = ({handleChange, item , handleSubmit, editItem}) =>{


        return(
            <div className="container">
                <div className="row">
                     <input
                     type="text" 
                     className="txt"
                     placeholder="Enter some text ......."
                     onChange={handleChange}
                     value={item}
                     />
                     <button 
                        className={editItem? "btn-green" : "btn"}
                        onClick={handleSubmit} 
                     >{editItem ? "Edit Todo" : "Add Todo"}</button>
                </div>
            </div>
        )
}
export default TodoInput
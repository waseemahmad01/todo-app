import React , {useState , useEffect} from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import uuid from 'uuid'
import './Components/Style.css'

const App = ()=>{

  const [items, setItems] = useState([])
  const [item, setItem] = useState('')
  const [id, setId] = useState(uuid())
  const [editItem, setEditItem] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const localItems = (JSON.parse(localStorage.getItem('TodoItems')))
    if(localItems){
      setItems(localItems)
    }else{
      setItems([])
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('TodoItems', JSON.stringify(items))
  }, [items])

  const handleChange = e =>{
    setItem(e.target.value)
  }
  const handleSubmit = () =>{
    if(item === ''){
      alert("Can't enter empty value...")
    }else{
      const newItem = {
        title:item, 
        id:id,
        completed:complete
      }
      const newArray = [...items, newItem]
      setItems(newArray)
      setItem('')
      setId(uuid())
      setEditItem(false)
      setComplete(false)

      localStorage.setItem('TodoItems',JSON.stringify(items))
    }  
  }
  const clearItems = () =>{
    setItems([])
  }
  const handleDelete = id =>{
    const filteredItems = items.filter(c=>c.id !== id)
    setItems(filteredItems)
  }
  const handleEdit = id => {
    const filteredItems = items.filter(c=>c.id !== id)
    const filterItem = items.find(c=> c.id === id)
    setItems(filteredItems)
    setItem(filterItem.title)
    setEditItem(true)
    setId(id)
    setComplete(false)
  }
  const handleComplete = item =>{
    const newArray = [...items]
    const index = items.indexOf(item)
    newArray[index] = items[index]
    newArray[index].completed = true
    setItems(newArray)
  }

    return(
      <div className="main-container">
        <h1 className="title">Todo Input</h1>
        <TodoInput
          handleChange = {handleChange}
          item = {item}
          editItem = {editItem}
          handleSubmit = {handleSubmit}
        />
        <TodoList
           clearItems = {clearItems}
           items = {items}
           handleDelete = {handleDelete}
           handleEdit = {handleEdit}
           handleComplete = {handleComplete}
        />
      </div>
    )
}

export default App;

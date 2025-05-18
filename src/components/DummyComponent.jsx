import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addNote,deleteNote,editNote,counter} from '../redux/DummySlice'
const DummyComponent = () => {
    const reduxdata= useSelector(state=>state.babu)
    
    const dispatch =useDispatch()
    const [data,setdata]=React.useState('')
    const [edited, setEdited] = useState({ id: null, text: "" });
    console.log("edited",edited)

    const handleAdd=(e)=>{
        e.preventDefault()
        console.log(data)
        dispatch(addNote(data))
        setdata("")
    }
    const handleDelete=(i)=>{
      console.log(i,"ankitid")
      dispatch(deleteNote(i))

    }
    const handleEdit = (i) => {
        setEdited({ id: i.id, text: i.text });
      };
      
    console.log(reduxdata,"ankit");
   const addednew=()=>{
     dispatch(counter())
    }
    const handleEditFinalsubmit=(e)=>{
        e.preventDefault();
        dispatch(editNote(edited))
       setEdited({ id: null, text: ""}) 
    }
    
  return (
    <div>
        <form onSubmit={handleAdd}>
        <input type='text' placeholder='add data' value={data} onChange={(e)=>setdata(e.target.value)}/>
        <button type='submit'>Add data</button>
        </form>
    {reduxdata.data.map((i, index)=>
       <li key={index}> {i.text} <button onClick={()=>handleDelete(i)}>Delete</button> <button onClick={()=>handleEdit(i)}>Edit</button></li>
     )}
     {edited.text.trim()!==""&&(<form onSubmit={handleEditFinalsubmit}>
     <input type='text' value={edited.text} onChange={(e)=>setEdited({...edited,text:e.target.value})} placeholder='enter edited text'  />
    <button type="submit"> update</button>
     </form>)}
     


        <button onClick={addednew}>counter</button>
        <h1>{reduxdata.count}</h1>
        
    </div>
  )
}

export default DummyComponent

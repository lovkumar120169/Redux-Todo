import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoFunction, postTodoFaliur, postTodoRequest, postTodoSuccess } from '../Redux/action'
import axios from 'axios'

export const Buttons = () => {
    const [note,SetNote]=useState("")
    const dispatch=useDispatch()

    const addNote=()=>{
      dispatch(postTodoRequest())
      axios.post("http://localhost:8080/Todos",{title:note,status:false}).then((res)=>{
        dispatch(postTodoSuccess(res.data))
      }).catch((err)=>{
        dispatch(postTodoFaliur())
      })
    }

    return (
    <div>
        <input type="text" value={note} style={{fontSize:"20px",padding:"10px"}} onChange={(e)=>SetNote(e.target.value)} placeholder='Enter a Note' />
        <button onClick={addNote} style={{fontSize:"20px",padding:"11.5px",color:"white",backgroundColor:"black",border:"none",borderRadius:"0 5px 5px 0"}}>Add</button>
    </div>
  )
}

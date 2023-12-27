import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoFaliur, deleteTodoRequest, deleteTodoSuccess, getTodoFaliur, getTodoRequest, getTodoSuccess, updateTodoFaliur, updateTodoRequest } from '../Redux/action'
import axios from 'axios'
import "./Notes.css";
import { IoMdClose } from "react-icons/io";


export const Notes = () => {
    const data = useSelector((store) => store.TodoArr)
    console.log(data)
    const dispatch = useDispatch()
    console.log(data)
    const getTodo = () => {
        dispatch(getTodoRequest())
        axios("http://localhost:8080/Todos").then((req) => {
            dispatch(getTodoSuccess(req.data))
        }).catch((err) => {
            dispatch(getTodoFaliur())
        })
    }

    const deleteTodoItem = (id) => {
        dispatch(deleteTodoRequest())
        axios.delete(`http://localhost:8080/Todos/${id}`).then((res) => {
            getTodo()
        }).catch((err) => {
            dispatch(deleteTodoFaliur())
        })
    }
    

    const updateTodoItem=(action,id)=>{
        let change=null
        if(action=="Completed"){
            change=true
        }else{
            change=false
        }
        dispatch(updateTodoRequest())
        axios.patch(`http://localhost:8080/Todos/${id}`,{status:change}).then((res) => {
            getTodo()
        }).catch((err) => {
            dispatch(updateTodoFaliur())
        })
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div>
            <div className='container-div'>
                {
                    data?.map((ele, ind) => {
                        return (
                            <div key={ind} style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", width: "100%", margin: "auto", display: "flex", justifyContent: "space-between", gap: "50px", marginBottom: "10px", padding: "25px",borderRadius:"10px" }}>
                                <div>
                                    <h2>Title: {ele.title}</h2>
                                    <h3>Status: <span style={{color:ele.status?"#42b883":"#f95959"}}>{ele.status ? "Compleated" : "Pending"}</span></h3>
                                    <div style={{display:"flex",gap:"10px"}}>
                                        <button onClick={(e)=>{updateTodoItem(e.target.value,ele.id)}} value={"Completed"}  style={{color:!ele.status?"white":"#ccc",fontSize:"16px",fontWeight:"600",backgroundColor:!ele.status?"#42b883":"grey",border:"none",borderRadius:"5px",padding:"10px",cursor:ele.status?"not-allowed":"pointer"}}>Completed</button>
                                        <button onClick={(e)=>{updateTodoItem(e.target.value,ele.id)}} value={"Pending"}  style={{color:ele.status?"white":"#ccc",fontSize:"16px",fontWeight:"600",backgroundColor:ele.status?"#f95959":"grey",border:"none",borderRadius:"5px",padding:"10px",cursor:ele.status?"pointer":"not-allowed"}}>Pending</button>
                                    </div>
                                </div>
                                <div>

                                    <IoMdClose style={{color:"#f95959",fontSize:"20px",fontWeight:"600",borderRadius:"5px",padding:"10px",cursor:"pointer"}} onClick={() => deleteTodoItem(ele.id)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

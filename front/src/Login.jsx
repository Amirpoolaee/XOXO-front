import React, { createContext, useContext, useState } from "react";
import "./styles/login.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "./First";





function Login(){

    const {p1 , setp1} = useContext(UserContext)
    const {p2 , setp2} = useContext(UserContext)


    function LoginOrCreateUser(){
        
        axios.post('http://127.0.0.1:8000/login',p1.name).then((response) =>{setp1(response.data)})
        axios.post('http://127.0.0.1:8000/login',p2.name).then((response) =>{setp2(response.data)})
        
    }

    return <div className="login d-flex flex-column">
        <h1 className="text-center text-white mt-3 mb-5 pb-5 ">Tic-Tac-Toe</h1>

        <div className="d-flex flex-column align-items-center my-5">
            <h3 className="text-white">fill the form</h3>

            <input className="form-control w-25 mt-4  py-2 text-white" type="text"  name="" placeholder="Enter p1 Name" onChange={(e)=>setp1({name : e.target.value , score:0})}></input>

            <input className="form-control w-25 mt-4  py-2 text-white" type="text" name="" placeholder="Enter p2 Name" onChange={(e)=>setp2({name : e.target.value , score:0})}></input>

               
                <Link className=" mt-4 w-25 text-white" to="/tictactoe"><button className="w-100 py-2 text-white"  onClick={()=>LoginOrCreateUser()}>Start Game</button></Link>
          

        </div>
        <h2 className="text-center my-5 ">Proved By Your Name 2012</h2>
        
    </div>
}

export default Login;
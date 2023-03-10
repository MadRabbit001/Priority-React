import React from "react";
import "./Login.css";
import logo from "../pictures/img.png"
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import Greet from "./components/Greet";


function Login(){
    return(
        <div className={"container"}>
        <div className={"two"}>
            <div className={"login"}>
                <Greet/>
                <VideoPlayer/>
                <input placeholder={"username"}/>
                <input placeholder={"password"}/>
                <button>login</button>
            </div>
            <img className="App-logo" src={logo} alt={"priority logo"}/>
        </div>
            <Footer/>
        </div>
    );
}

export default Login;
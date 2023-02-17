import React from "react";

import Header from "./components/Header";
import "./Main.css";
import Footer from "../login/components/Footer";

function Main(){
    return (
        <>
        <Header/>
        <div className={"main"}>
        <Footer/>
        </div>
        </>
    );
}

export default Main;
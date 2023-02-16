import React from "react";
import "./SubList.css";
function  SubList(props){
    return <li className={"li-sub"}>{props.name}</li>
}

export default SubList;
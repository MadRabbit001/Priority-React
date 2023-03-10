import React from "react";

import "./Header.css"
import List from "./List";
import listData from "./DB/listData";

function createList(listName){
    return <List
        key={listName.id}
        name={listName.name}
    />;
}
function Header(){
    return (
        <div className={"menu-bar"}>
            <ul className={"ul-menu"}>
                <li className={"li go"}>option1</li>
                {listData.map(createList)}
            </ul>
        </div>
    );
}

export default Header;
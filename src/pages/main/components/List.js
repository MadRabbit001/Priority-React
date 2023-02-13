import React,{useState} from "react";
import SubList from "./SubList";
import subLists from "./DB/subListData";

function createSubList(list){
    return <SubList
        key={list.id}
        name={list.name}
    />;
}
function List(props){
    const [showList,setShowList] = useState(false);

    return(
        <li
            onMouseEnter={() => setShowList(true)}
            onMouseLeave={() => setShowList(false)}
        >
            {props.name}
            {showList && (<div className={"sub"}>
                <ul>
                    {subLists.map(createSubList)}
                </ul>
            </div>)}
        </li>
    );
}

export default List;
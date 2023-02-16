import React from "react";
import styled from 'styled-components';

import "./Greet.css"

function Greet(){
    let greeting = "";
    const time = new Date().getHours();

    if (time > 5 && time <= 12) {
        greeting = "Good Morning!";
        greeting.styled.p`
        border: 2px solid blue;
        `;
    }
    else if (time > 12 && time <=16) {
        greeting = "Have a Perfect Noon!";
        greeting.styled.p`
        border: 2px solid blue;
        `;
    }
    else if (time > 16 && time <= 20) {
        greeting = "Have a Perfect AfterNoon!";
    }
    else if (time > 20 && time <= 24) {
        greeting = "Good Evening Boss!";
    }
    else if (time > 24 && time <= 5) {
        greeting = "Why the FUCK you awake?!";
    }

    return <p>{greeting}</p>
}

export default Greet;
import React from "react";
import styled from 'styled-components';


    let Greeting;
    const time = new Date().getHours();

    if (time > 5 && time <= 12) {
        Greeting = styled.p`
        box-shadow: 0px 0px 3px 5px green ;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
        `;
    }
    else if (time > 12 && time <=16) {
        Greeting = styled.p`
          box-shadow: 0px 0px 3px 5px yellow ;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }
    else if (time > 16 && time <= 20) {
        Greeting = styled.p`
          box-shadow: 0px 0px 3px 5px blue ;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }
    else if (time > 20 && time <= 24) {
        Greeting = styled.p`
          box-shadow: 0px 0px 3px 5px darkblue ;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }
    else if (time > 0 && time <= 5) {
        Greeting = styled.p`
          box-shadow: 0px 0px 3px 5px deeppink ;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }



export default Greeting;
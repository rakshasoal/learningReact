import React from "react";

function FuntionClick(){
    function clickHandler(){
        console.log("button clicked")
    }
    return(
        <div>
        <button onClick = {clickHandler}>CLICK</button>
        </div>
    )
}
export default FuntionClick
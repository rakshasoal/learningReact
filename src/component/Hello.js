import React from "react";

const Hello = (props) => {
  const {name,heroName} = props
    return(
      <>
        <h1>HELLO {name} a.k.a {heroName}</h1>
{props.children}
</>
    )

 
}
export default Hello
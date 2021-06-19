import React, { useState } from "react";

export default function Todo(props){
  const [state,setState]=useState(false);
  
  

  function handleClick(){
    setState((prev)=>(!prev));
  }

  return (<>
  <li onClick={handleClick} style={{textDecoration: state ? "line-through" : null}}>{props.val} <button 
  onClick={()=>props.onClickItem(props.id)}>Del</button>
  </li>
  
  </>)
}


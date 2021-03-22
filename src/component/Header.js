import React from 'react';
import './style.css';

function Header (props) {
    // const raw ={'hello':"helloworld"};
    // props.functionCall(raw)
    return(
        console.log(props),
        <h1 className="header">{props.headerContent}</h1>
    
    )}
export default Header
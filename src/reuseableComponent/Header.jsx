import React from 'react'

export default function Header(props){
    return(
        <center>
        <h1 className='header'>{props.name}</h1>
        </center>
    )
}
import React from "react"; 
export default function User({title,text}) {
    return (
        <li>
            {title}: 
            <label>  {text}</label>
        </li>
    )
}

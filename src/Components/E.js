import React, { useState } from 'react'
import Home from './Home'
import '../App.css';
import Contect from './Contect';


export default function E() {
    //states
    //variable
    var name = 'shivkanya'
    //Hook variable
    const [surname, setSurname] = useState("gurjar")
    return (
        <div>
            <h5>my name is {name} {surname} </h5>
            <Home/>
            <Contect/>
        </div>
    )
}

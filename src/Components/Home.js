import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home() {

    
    //state variable
    var name = 'shivkanya'
    //Hook variable
    const [surname, setSurname] = useState("gurjar")
    return (
        <>
          <Header/>
             <main>
               <h1>Home page</h1>
               <h5>my name is {name} {surname} </h5>
                 <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
           </main>
           <Footer/>
               
               
               
        </>
    )
}

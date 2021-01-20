
// import './App.css';
// import React, {useState} from 'react'

// function App() {
//     // première valeur= valeur du state
// ça
//     const [clicked, plusone]= useState(0);
//     // deuxième valeur= fonction qui peut mettre à jour le state. 
//     return (
//         <div>
//             <p>Tu as clické: {clicked} </p>
//             <button onClick={()=>{
//                 plusone(clicked+1)
//             }}>click</button>
//         </div>
//     )

// }

// export default App

import "./App.css";
import React, { useState } from 'react'
import Article from "./components/Article"

function App() {
    const [variable, setVariable] = useState("Coucou")
    const [ouf, setOuf] = useState("nouvelle variable")
    return (
        <div>
            <h1>{variable}</h1>
            <Article autre={ouf}/>
        </div>
    )
}

export default App


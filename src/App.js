
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


function App() {
    const [variable, setVariable] = useState("Coucou")
    return (
        <div>
            <h1>{variable}</h1>
        </div>
    )
}

export default App


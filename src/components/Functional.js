import React from "react";

const Functional = () =>{
    return(
        <div className="functional-container">
            <h1>This is created using Functional Component</h1><br/>
            <p>This is done using External CSS</p><br/>
            <p style={{
                color : 'red',
            }}>This is done using Inline CSS</p>
        </div>
    )
}

export default Functional;
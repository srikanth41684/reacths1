import React from "react";

class Class extends React.Component{
    render(){
        return(
            <div className="class-container">
                <h1>This is created using Class Component</h1><br/>
                <p>This is done using External CSS</p><br/>
                <p style={{
                    color : 'red',
                }}>This is done using Inline CSS</p>
            </div>
        );
    }
}

export default Class;
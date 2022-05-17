import React, { useState } from "react";
import Class from "./Class";
import Functional from "./Functional";


const Button = () =>{
    const [showFuncn, setShowFuncn] = useState(false);
    const [showClass, setShowClass] = useState(false);

    return(
        <div className="container">
            <div className="left-container">
                <button className="btns btn1" onClick={() => setShowFuncn(!showFuncn)}>To see Styling in Functional Component</button>
                {showFuncn && <Functional />}
            </div>


            <div className="right-container">
                <button className="btns" onClick={() => setShowClass(!showClass)}>To see Styling in Class Component</button>
                {showClass && <Class />}
            </div>
        </div>
    );
}

export default Button;
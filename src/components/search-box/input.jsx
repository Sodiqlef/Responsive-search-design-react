import React from "react";
import './input.css'





const Input = (props) => {

    

    return ( <React.Fragment>
<div className="search">
    
        <input type={"search"} placeholder="Search" onChange={props.onChangeHandler}/>
        </div>
    </React.Fragment> );
}
 
export default Input;
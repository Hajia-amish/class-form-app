import {  useState } from "react";
import "./ClassForm.css";


const ClassForm =( props) => {
    const [focused, setfocused]= useState(false);
    const { label, errorMessage, onChange, id, ...inputprops } = props;

    const handleFocus = (e) => {
        
    };
    return(
        <div className="ClassForm">
          <label>{label}</label>
            <input {...inputprops} 
             onChange={onChange}
              onBlur={handleFocus}
              onFocus={() => inputprops.name==="confirmPassword" && setfocused(true)} 
               focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    );
};
export default ClassForm;
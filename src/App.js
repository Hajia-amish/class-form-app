import React, { useState } from "react";
import './App.css';
import ClassForm from "./Component/ClassForm.js";

const App = () => {
    const [values, setvalues] = useState({
      username:"",
      email:"",
      birthday:"",
      password:"",
      confirmPassword:"",
    });
    const inputs = [
      {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Username",
        errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
        label:"Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id:2,
        name:"email",
        type:"text",
        placeholder:"Email",
        errorMessage: "should hava a valid email address!",
        label:"Email",
        pattern: "hajiaamish533@gmail.com",
        required: true,
      },
      {
        id:3,
        name:"biryhday",
        type:"text",
        placeholder:"Birthday",
        errorMessage:"should hava a valid date",
        pattern:" mm/dd/yyyy",
        label:"Birthday",
        required: true,
      },
      {
        id:4,
        name:"password",
        type:"text",
        placeholder:"Password",
        errorMessage:"password should be 8-20 characters and include at least 1 letter 1 number and 1 special character!",
        label:"Password",
        pattern: '^(?=.*[0-9])(?=.?*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-Z0-9!@#$%^&*]{8,20}$',
        required: true,
      },
      {
        id:5,
        name:"comfirmPassword",
        type:"text",
        placeholder:"Comfirm Password",
        errorMessage:" passwords don't match!",
        label:"Comfirm Password",
        pattern: values.password,
        required: true,
      },
    ];


   const handleSubmit = (e) => {
    e.preventDefault();
   };
   const onChange = (e)=>{
      setvalues({...values, [e.target.name]: e.target.value});
   };

   console.log(values)
   return (
   <div className="app">
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <ClassForm key={input.id} {...input} value={values[input.name]} noChange={onChange} />  
      ))}
    <button>Submit</button>
    </form>
   </div>
   );
};
   


export default App;

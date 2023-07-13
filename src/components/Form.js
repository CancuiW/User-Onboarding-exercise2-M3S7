import React from "react";

export default function Form(props){

    const {values,change,submit,disabled,errors}=props

    const onChange=evt=>{
        const {name, value,type,checked}=evt.target
        const changeValue=type==="checkbox"?checked:value
        
        change(name,changeValue)

    }
    const onSubmit=evt=>{
        evt.preventDefault()
        submit()
    }
    return (
        <div className="container">
            <div className="errors">
                <p>{errors.firstName}</p>
                <p>{errors.lastName}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.termsOfService}</p>
            </div>
            <form onSubmit={onSubmit}>
                <label>First Name
                    <input type="text" onChange={onChange} name='firstName' value={values.firstName}/>
                </label>
                <br/>
                <label>Last Name
                    <input type="text" onChange={onChange} name='lastName' value={values.lastName} />
                </label>
                <br />
                <label>Email
                    <input type="email" onChange={onChange} name='email' value={values.email} />
                </label>
                <br />
                <label>Password
                    <input type="password" onChange={onChange} name='password' value={values.password} />
                </label>
                <br />
                <label>Terms Of Service
                    <input type="checkbox" onChange={onChange} name='termsOfService' checked={values.termsOfService} />
                </label>
                <br />
                <button disabled={disabled}>Submit</button>


            </form>

        </div>
    )

}
import React from "react";

export default function Display (props){
    const {displayValues}=props


    return(
        <>
        {displayValues.map((x,idx)=>{
            return (
                <div key={idx}>
                    <p>
                        Name is {x.firstName} {x.lastName}
                    </p>
                    <p>{x.email}</p>
                    <p>{x.password}</p>
                    <p>{x.termsOfService}</p>

                </div>

            )
            

        })}
        </>
    )
}
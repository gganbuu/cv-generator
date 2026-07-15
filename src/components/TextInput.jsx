import { useState } from "react"

export function TextInput({value, className, id, placeholder, onChange, editable}) {


    return (
        <div
        id={id}>
        {editable ? (
            (
                <input type="text"
                value={value}
                placeholder={placeholder}
                className={className}
                onChange={onChange}/>
            )
        ) : className == "section-title" ? (<h1>{value}</h1>)
          : (<p>{value}</p>)
        }
        </div>
    )
}
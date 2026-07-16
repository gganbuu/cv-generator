export function TextArea({children, editable, className, id, placeholder, onChange}) { 

    return (
        <div
        id={id}>
            {editable ? (
                (           
                    <textarea
                    placeholder={placeholder}
                    onChange={onChange}> 
                        {children} 
                    </textarea>
                )
            ) : className == "section-title" ? (<h1>{children}</h1>)
            : (<p>{children}</p>)
            }
        </div>


        // <textarea>
        //     {children}
        // </textarea>
    )

};
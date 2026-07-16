export function BulletInput({value, id, placeholder, className, onChange, onClick, editable}) {
    
    return (
        <div className="bullet-input">
            {editable ? (
            (   
                <>       
                    <input type="text"
                    value={value}
                    id={id}
                    placeholder={placeholder}
                    className={className}
                    onChange={onChange}/>
                    <button id={id} onClick={onClick}>Delete</button>
                </>
            )
            ): (<p>{value}</p>)}
        </div>
    )
}
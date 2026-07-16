import { DeleteButton } from "./DeleteButton.jsx" 

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
                    <DeleteButton id={id} onClick={onClick}>Delete</DeleteButton>
                </>
            )
            ): (<p>{value}</p>)}
        </div>
    )
}
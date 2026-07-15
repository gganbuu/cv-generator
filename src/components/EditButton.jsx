export function EditButton({onClick, editable}) {

    return (
        <button onClick={onClick}> 
            {editable ? ("Save") : ("Edit")}
        </button>
    )
}
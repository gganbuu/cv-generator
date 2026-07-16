export function DateInput({value, className, id, onChange, editable}) {
    return (
        <div>
            {editable ? (
                <input type="date"
                className={"date-picker"}
                value={value}
                onChange={onChange}
                />
            ) : (<p>{value}</p>)}
        </div>
    )
}
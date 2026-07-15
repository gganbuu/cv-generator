import { useState } from "react"

export function TextInput({value, className, onChange, id, multiline}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleMouseClick = () => {
        setIsClicked(true)
    }

    const handleMouseLeave = () => {
        setIsClicked(false)
    }

    return (
        <div
        onClick={() => handleMouseClick()}
        onMouseLeave={() => handleMouseLeave()}
        id={id}>
        {isClicked ? (
            multiline ? (
                <textarea
                value={value}
                className={className}
                onChange={onChange}/>
            ) : (
                <input type="text"
                value={value}
                className={className}
                onChange={onChange}/>
            )
        ) : className == "section-title" ? (<h1>{value}</h1>)
          : (<p>{value}</p>)
        }
        </div>
    )
}
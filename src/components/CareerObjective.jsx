import { useState } from "react";
import { TextArea } from "./TextArea.jsx";
import { EditButton } from "./EditButton.jsx";
import { ClearButton } from "./ClearButton.jsx";

export function CareerObjective() {
    const [careerObjective, setCareerObjective] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    const [editable, setEditable] = useState(false)
    
     const handleButtonDisplay = () => {
        const careerObjectiveBox = document.querySelector(".career-objective-box")
        careerObjectiveBox.querySelector(".edit-and-clear-box").classList.toggle("hidden")
    }
    
    const handleEditable = () => {
        editable == true ? setEditable(false): setEditable(true);
    }

    const handleClear = () => {
        setCareerObjective('')
    }

    const handleCareerObjectiveChange = (e) => {
        setCareerObjective(e.target.value)
    }

    return (
    <div className="career-objective-box" onMouseEnter={handleButtonDisplay} onMouseLeave={handleButtonDisplay}>
        <h1>Career Objective</h1>
        <hr />
        <div className="edit-and-clear-box hidden">
            <EditButton onClick={() => handleEditable()} editable={editable}/>
            <ClearButton onClick={() => handleClear()}/>
        </div>
        <TextArea children={careerObjective} 
                  onChange={() => handleCareerObjectiveChange()} 
                  editable={editable}
                  id="career-objective"
                  placeholder="enter a deep and meaningful summary of your career objectives!"/>
    </div>

    )
}
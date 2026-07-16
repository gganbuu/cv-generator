import { useState } from "react";
import { EditButton } from "./EditButton";
import { ClearButton } from "./ClearButton.jsx";
import { TextInput } from "./TextInput.jsx";
import { DateInput } from "./DateInput.jsx"
import { BulletInput } from "./BulletInput.jsx";

export function Education() {
    return (
        <>
            <h1>Education</h1>
            <hr />
            <EducationBlock/>
        </>
    )
}

function EducationBlock() {
    const [educationHeaderState, setEducationHeaderState] = useState({degree: 'Bachelor of Example',
                                                                    timeStart: '2022-02-01',
                                                                    timeEnd: '2026-02-01',
                                                                    university: 'Example University'
    })

    const [editable, setEditable] = useState(false)

    const [isHovered, setIsHovered] = useState(false)

    const handleHoveredTrue = () => {
        setIsHovered(true)
    }

    const handleHoveredFalse = () => {
        setIsHovered(false)
    }

    const handleEditable = () => {
        editable ? setEditable(false): setEditable(true);
    }
    
    const handleDegreeChange = (e) => {
        setEducationHeaderState({...educationHeaderState, degree: e.target.value})
    }
    return (
        <div className="education-box" onMouseEnter={handleHoveredTrue} onMouseLeave={handleHoveredFalse}>
            <div className={isHovered ? "edit-and-clear-box": "edit-and-clear-box hidden"}>
                <EditButton onClick={() => handleEditable()} editable={editable}/>
                <ClearButton onClick={() => handleClear()}/>
            </div>
            <div className="education-header">
                <TextInput value={educationHeaderState.degree}
                className="section-p"
                editable={editable}
                onChange={(e) => handleDegreeChange(e)}/>
                <div className="education-date">
                    <DateInput value={educationHeaderState.timeStart}
                    className="section-p"
                    editable={editable}
                    onChange={(e) => handleDegreeChange(e)}/>
                    <p> — </p>
                    <DateInput value={educationHeaderState.timeEnd}
                    className="section-p"
                    editable={editable}
                    onChange={(e) => handleDegreeChange(e)}/>
                </div>
            </div>

            <TextInput value={educationHeaderState.university}
            className="section-p"
            editable={editable}
            onChange={(e) => handleDegreeChange(e)}/>

            <EducationBlockAchievements/>
        </div>
    )
}

function EducationBlockAchievements() {
    const [achievements, setAchievements] = useState([{id: crypto.randomUUID(), achievement: "achievement 1"},{id: crypto.randomUUID(), achievement: "achievement 2"}])
    
    const [editable, setEditable] = useState(false)
    const handleEditable = () => {
        editable ? setEditable(false): setEditable(true);
    }
    
    const [isHovered, setIsHovered] = useState(false)
    const handleHoveredTrue = () => {
        setIsHovered(true)
    }
    const handleHoveredFalse = () => {
        setIsHovered(false)
    }

    


    const handleAchievementChange = (e) => {
        const editedAchievements = achievements.map(item => {
            if (item.id == e.target.id) {
                return {id: item.id, achievement: e.target.value}
            }
            return item
        })

        setAchievements(editedAchievements)

    }
    
    const handleAddAchievement = () => {
        setAchievements([...achievements, {id: crypto.randomUUID(), achievement: ""}])
    }
    
    const handleDeleteAchievement = (e) => {
        setAchievements([...achievements.filter(item => item.id != e.target.id)])
    }
    
    return (
        <div className="achievements-box" onMouseEnter={handleHoveredTrue} onMouseLeave={handleHoveredFalse}>
            <div className={isHovered ? "edit-and-clear-box": "edit-and-clear-box hidden"}>
                <EditButton onClick={() => handleEditable()} editable={editable}/>
                <ClearButton onClick={() => handleClear()}/>
            </div>
            <ul>
                {achievements.map(item => (
                    <li key={item.id}>
                        <BulletInput value={item.achievement}
                        id={item.id}
                        editable={editable}
                        className="section-p"
                        onChange={(e) => handleAchievementChange(e)}
                        onClick={(e) => handleDeleteAchievement(e)}/>
                    </li>
                ))}
                <button className={editable ? "": "hidden"} onClick={handleAddAchievement}>Add</button>
            </ul>
        </div>
    )
    
}
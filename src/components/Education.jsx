import { useState } from "react";
import { EditButton } from "./EditButton";
import { ClearButton } from "./ClearButton.jsx";
import { TextInput } from "./TextInput.jsx";
import { DateInput } from "./DateInput.jsx"
import { BulletInput } from "./BulletInput.jsx";

export function Education() {
    const [editable, setEditable] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [educationBlocks, setEducationBlocks] = useState([<EducationBlock id={crypto.randomUUID()}/>])

    const handleAddEducationBlocks = () => {
        setEducationBlocks([...educationBlocks, <EducationBlock id={crypto.randomUUID()}/>])
    }

    const handleHoveredTrue = () => {
        setIsHovered(true)
    }

    const handleHoveredFalse = () => {
        setIsHovered(false)
    }

    return (
        <div className="education-section" onMouseEnter={handleHoveredTrue} onMouseLeave={handleHoveredFalse}>
            <h1>Education</h1>
            <hr />
            <ul className="education-blocks">
                {educationBlocks.map(block => {return (<li key={block.id}>{block}</li>)})}
            </ul>
            <button className={isHovered ? "": "hidden"} onClick={handleAddEducationBlocks}>Add Education</button>
        </div>
    )
}

function EducationBlock({id}) {
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

            <EducationBlockAchievements editable={editable} isHovered={isHovered}/>
        </div>
    )
}

function EducationBlockAchievements({editable, isHovered}) {
    const [achievements, setAchievements] = useState([{id: crypto.randomUUID(), achievement: "achievement 1"},{id: crypto.randomUUID(), achievement: "achievement 2"}])

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
        <div className="achievements-box">
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
                <div className={editable ? "": "hidden"}>
                    <button onClick={handleAddAchievement}>Add</button>
                    <ClearButton/>
                </div>
            </ul>
        </div>
    )
    
}
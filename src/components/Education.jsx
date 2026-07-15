import { useState } from "react";
import { TextInput } from "./TextInput";

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
                                                                    timeStart: '2022/02/1',
                                                                    timeEnd: '2026/02/1',
                                                                    university: 'Example University'
    })
    const handleDegreeChange = (e) => {
        setEducationHeaderState({...educationHeaderState, degree: e.target.value})
    }
    return (
        <>
            <div className="education-header">
                <TextInput value={educationHeaderState.degree}
                className="section-p"
                onChange={(e) => handleDegreeChange(e)}/>
                <div className="education-date">
                    <TextInput value={educationHeaderState.timeStart}
                    className="section-p"
                    onChange={(e) => handleDegreeChange(e)}/>
                    <p> — </p>
                    <TextInput value={educationHeaderState.timeEnd}
                    className="section-p"
                    onChange={(e) => handleDegreeChange(e)}/>
                </div>
            </div>

            <TextInput value={educationHeaderState.university}
            className="section-p"
            onChange={(e) => handleDegreeChange(e)}/>

            <EducationBlockAchievements/>
        </>
    )
}

function EducationBlockAchievements() {
    const [achievements, setAchievements] = useState(['achievement1', 'achievement2', 'achievement3', 'achievement4'])
    
    const handleAchievementChange = (e) => {

    }
    
    const handleAddAchievement = () => {

    } 
    
    return (
        <>
            <ul>
                {achievements.map(item => (
                    <li>
                        <TextInput value={item}
                        className="section-p"
                        onChange={(e) => handleAchievementChange(e)}/>
                    </li>
                ))}
                <button onClick={handleAddAchievement()}></button>
            </ul>
        </>
    )
    
}
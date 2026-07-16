import { useState } from "react"
import { EditButton } from "./EditButton";
import { ClearButton } from "./ClearButton.jsx";
import { TextInput } from "./TextInput.jsx";
import { DateInput } from "./DateInput.jsx"
import { BulletInput } from "./BulletInput.jsx";
import { DeleteButton } from "./DeleteButton.jsx";

export function Experience() {
    const [editable, setEditable] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [experienceBlocks, setExperienceBlocks] = useState([<ExperienceBlock id={crypto.randomUUID()}/>])

    const handleAddExperienceBlocks = () => {
        setExperienceBlocks([...experienceBlocks, <ExperienceBlock id={crypto.randomUUID()}/>])
    }

    const handleHoveredTrue = () => {
        setIsHovered(true)
    }

    const handleHoveredFalse = () => {
        setIsHovered(false)
    }

    return (
        <div className="experience-section" onMouseEnter={handleHoveredTrue} onMouseLeave={handleHoveredFalse}>
            <h1>Experience</h1>
            <hr />
            <ul className="education-blocks">
                {experienceBlocks.map(block => {return (<li key={block.id}>{block}</li>)})}
            </ul>
            <button className={isHovered ? "": "hidden"} onClick={handleAddExperienceBlocks}>Add Experience</button>
        </div> 
    )
}

function ExperienceBlock({id, handleDeleteExperienceBlock}) {
    const [experienceHeaderState, setExperienceHeaderState] = useState({title: 'Example Associate',
                                                                    timeStart: '2022-02-01',
                                                                    timeEnd: '2026-02-01',
                                                                    location: 'Example City'})
    
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

    return (
        <div className="education-box" onMouseEnter={handleHoveredTrue} onMouseLeave={handleHoveredFalse}>
            <div className={isHovered ? "edit-and-clear-box": "edit-and-clear-box hidden"}>
                <EditButton onClick={() => handleEditable()} editable={editable}/>
                <ClearButton onClick={() => handleClear()}/>
                <DeleteButton id={id} onClick={(e) => handleDeleteExperienceBlock(e)}></DeleteButton>
            </div>
            <div className="education-header">
                <TextInput value={experienceHeaderState.title}
                className="section-p"
                editable={editable}
                onChange={(e) => handleDegreeChange(e)}/>
                <div className="education-date">
                    <DateInput value={experienceHeaderState.timeStart}
                    className="section-p"
                    editable={editable}
                    onChange={(e) => handleDegreeChange(e)}/>
                    <p> — </p>
                    <DateInput value={experienceHeaderState.timeEnd}
                    className="section-p"
                    editable={editable}
                    onChange={(e) => handleDegreeChange(e)}/>
                </div>
            </div>

            <TextInput value={experienceHeaderState.location}
            className="section-p"
            editable={editable}
            onChange={(e) => handleDegreeChange(e)}/>

            <ExperienceBlockAchievements editable={editable} isHovered={isHovered}/>
        </div>
    )
}

function ExperienceBlockAchievements({editable, isHovered}) {
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
                <div className={editable ? "achievement-buttons": "achievement-buttons hidden"}>
                    <button onClick={handleAddAchievement}>Add</button>
                    <ClearButton/>
                </div>
            </ul>
        </div>
    )
    
}
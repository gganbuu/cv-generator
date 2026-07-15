import { useState } from "react";
import { TextInput } from "./TextInput";

export function CareerObjective() {
    const [careerObjective, setCareerObjective] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    const handleCareerObjectiveChange = (e) => {
        setCareerObjective(e.target.value)
    } 

    return (
    <>
        <h1>Career Objective</h1>
        <hr />
        <TextInput value={careerObjective}
        className='section-p'
        id='careerObjective'
        multiline={true}
        onChange={(e) => handleCareerObjectiveChange(e)}
        />
    </>

    )
}
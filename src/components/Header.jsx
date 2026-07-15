import { useState } from 'react'
import { TextInput } from './TextInput.jsx';
import { EditButton } from './EditButton.jsx';
import { ClearButton } from './ClearButton.jsx';

export function Header() {
    const [details, setDetails] = useState({name: "John Smith", 
                                            phone: "04123456789", 
                                            email: "john.smith@gmail.com",
                                            linkedIn: "https://www.linkedin.com/in/john-smith/",
                                            gitHub: "https://github.com/johnsmith/"});
    
    const [editable, setEditable] = useState(false)
    
    
    const handleEditable = () => {
        editable == true ? setEditable(false): setEditable(true);
    }

    const handleClear = () => {
        setDetails({name: "", 
                    phone: "", 
                    email: "",
                    linkedIn: "",
                    gitHub: ""})
    }


    const handleNameChange = (e) => {
        setDetails({...details, name: e.target.value})
    }

    const handlePhoneChange = (e) => {
        setDetails({...details, phone: e.target.value})
    }
    const handleEmailChange = (e) => {
        setDetails({...details, email: e.target.value})
    }

    const handleLinkedInChange = (e) => {
        setDetails({...details, linkedIn: e.target.value})
    }

    const handleGitHubChange = (e) => {
        setDetails({...details, gitHub: e.target.value})
    }

    return (
        <>
            <header>
                <div className="header-title">

                    <TextInput value={details.name}
                    className="section-title"
                    id="name"
                    placeholder="full name"
                    editable={editable}
                    onChange={(e) => handleNameChange(e)}/>

                    <div className="edit-and-clear-box">
                        <EditButton onClick={() => handleEditable()} editable={editable}/>
                        <ClearButton onClick={() => handleClear()}/>
                    </div>
                </div>

                <div className="header-grid">
                    <TextInput value={details.phone}
                    className="section-p"
                    id="phone"
                    placeholder="phone number"
                    editable={editable}
                    onChange={(e) => handlePhoneChange(e)}/>

                    <TextInput value={details.email}
                    className="section-p"
                    id="email"
                    placeholder="email address"
                    editable={editable}
                    onChange={(e) => handleEmailChange(e)}/>

                    <TextInput value={details.linkedIn}
                    className="section-p"
                    id="linkedIn"
                    placeholder="LinkedIn link"
                    editable={editable}
                    onChange={(e) => handleLinkedInChange(e)}/>

                    <TextInput value={details.gitHub}
                    className="section-p"
                    id="gitHub"
                    placeholder="GitHub link"
                    editable={editable}
                    onChange={(e) => handleGitHubChange(e)}/>
                </div>

            </header>
            <hr />
        </>
        
    )
}

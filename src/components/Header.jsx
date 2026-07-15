import { useState } from 'react'
import { TextInput } from './TextInput.jsx';

export function Header() {
    const [headerState, setHeaderState] = useState({name: "John Smith", 
                                                    phone: "04123456789", 
                                                    email: "john.smith@gmail.com",
                                                    linkedIn: "https://www.linkedin.com/in/john-smith/",
                                                    gitHub: "https://github.com/johnsmith/"});
    

    const handleNameChange = (e) => {
        setHeaderState({...headerState, name: e.target.value})
    }

    const handlePhoneChange = (e) => {
        setHeaderState({...headerState, phone: e.target.value})
    }
    const handleEmailChange = (e) => {
        setHeaderState({...headerState, email: e.target.value})
    }

    const handleLinkedInChange = (e) => {
        setHeaderState({...headerState, linkedIn: e.target.value})
    }

    const handleGitHubChange = (e) => {
        setHeaderState({...headerState, gitHub: e.target.value})
    }

    return (
        <>
            <header>
                <TextInput value={headerState.name} 
                className="section-title"
                id="name"
                onChange={(e) => handleNameChange(e)}/>

                <div className="header-grid">
                    <TextInput value={headerState.phone}
                    className="section-p"
                    id="phone"
                    onChange={(e) => handlePhoneChange(e)}/>
                    <TextInput value={headerState.email}
                    className="section-p"
                    id="email"
                    onChange={(e) => handleEmailChange(e)}/>

                    <TextInput value={headerState.linkedIn}
                    className="section-p"
                    id="linkedIn"
                    onChange={(e) => handleLinkedInChange(e)}/>

                    <TextInput value={headerState.gitHub}
                    className="section-p"
                    id="gitHub"
                    onChange={(e) => handleGitHubChange(e)}/>
                </div>
            </header>
            <hr />
        </>
        
    )
}

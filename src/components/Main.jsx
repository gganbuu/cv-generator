import { useState } from "react"
import { CareerObjective } from "./CareerObjective.jsx"
import { Education } from "./Education.jsx"
import { Experience } from "./Experience.jsx"

export function Main() {
    return (
        <main>
            <CareerObjective/>
            <Education/>
            <Experience/>
        </main>
    )
}
import React from 'react'
import Section from './Section'

const Resume = () => {
    return (
        <div>
            <Section
                name={"Item 1"}
                description={"This is a description of item 1."}
                score={"Score: 10/10"}
            />
            <Section
                name={"Item 2"}
                description={"This is a description of item 1."}
                score={"Score: 10/10"}
            />
            <Section
                name={"Item 3"}
                description={"This is a description of item 1."}
                score={"Score: 10/10"}
            />
        </div>
    )
}

export default Resume
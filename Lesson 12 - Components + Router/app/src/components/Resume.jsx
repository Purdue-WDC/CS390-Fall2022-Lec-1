import React from 'react'
import Section from './Section'

const data = [
    {
        name: "Item 1",
        description: "This is a description of item 1.",
        score: "10/10"
    },
    {
        name: "Item 2",
        description: "This is a description of item 2.",
        score: "2/10"
    },
    {
        name: "Item 3",
        description: "This is a description of item 3.",
        score: "5/10"
    }
]

const Resume = () => {
    return (
        <div>
            {data.map(item => {
                return (
                    <Section
                        name={item.name}
                        description={item.description}
                        score={item.score}
                    />
                )
            })}
        </div>
    )
}

export default Resume
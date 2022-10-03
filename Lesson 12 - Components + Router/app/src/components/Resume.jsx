import React from 'react'

const Resume = () => {
    const name = "Item 1"
    const description = "This is a description of item 1."
    const score = "Score: 10/10"

    return (
        <div>
            <div style={{ margin: '10px 0' }}>
                <div>{name}</div>
                <div>{description}</div>
                <div>{score}</div>
            </div>
        </div>
    )
}

export default Resume
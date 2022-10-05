import React from 'react'

const Section = (props) => {
    return (
        <div style={{ margin: '10px 0' }}>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.score}</div>
        </div>
    )
}

export default Section
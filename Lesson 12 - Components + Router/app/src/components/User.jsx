import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    {/* NOTE HOW THIS ID MATCHES THE URL */}
    const id = useParams().userId
    return (
        <div>User ID: {id}</div>
    )
}

export default User
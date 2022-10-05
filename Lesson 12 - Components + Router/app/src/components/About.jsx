import { Outlet, Link } from 'react-router-dom'

const About = (props) => {
    return (
        <div>
            <div
            style={{
                margin: '10px 0',
                display: 'flex',
                justifyContent: 'space-between'
            }}
            >
                About Page
                <Link to='/about/contact'>
                    Contact
                </Link>
                <Link to='/about/founding'>
                    Founding
                </Link>
            </div>

            <Outlet/>
        </div>
    )
}

export default About
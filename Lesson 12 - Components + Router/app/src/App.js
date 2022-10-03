import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Resume from './components/Resume';
import { Routes, Route, Link, Outlet } from 'react-router-dom'


const About = (props) => {
  console.log({props})
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
const Contact = () => <div>Contact</div>
const Founding = () => <div>Founding</div>

function App() {
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link to='/resume'>
          Resume
        </Link>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
      </div>

      <Routes>
        <Route
          path="home"
          element={<Home/>}
        />
        <Route
          path="resume" // path = '/' + 'resume'
          element={<Resume/>}
        />
        
        <Route path="about" element={<About/>} >				// route: /about
          <Route path="contact" element={<Contact/>} />		// route: /about/contact
          <Route path="founding" element={<Founding/>} />	// route: /about/founding
        </Route>


      </Routes>
    </div>
  );
}

export default App;

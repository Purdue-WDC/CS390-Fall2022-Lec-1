import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import User from './components/User';


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
    <BrowserRouter>
      {/* NAVBAR */}
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
        <Link to='/user/user1'>
          User1
        </Link>
        <Link to='/user/user2'>
          User2
        </Link>
      </div>

      <Routes>
        {/* BASIC ROUTES */}
        <Route
          path="home"
          element={<Home/>}
        />
        <Route
          path="resume" // path = '/' + 'resume'
          element={<Resume/>}
        />
        
        {/* NESTED ROUTING */}
        <Route
          path="about"
          element={<About/>} // route: /about
        >
          <Route
            path="contact"
            element={<Contact/>} // route: /about/contact
          />
          <Route
            path="founding"
            element={<Founding/>} // route: /about/founding
          />
        </Route>
        
        {/* DYNAMIC SEGMENTS */}
        <Route
          path="user/:userId"
          element={<User/>} // route: /about
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

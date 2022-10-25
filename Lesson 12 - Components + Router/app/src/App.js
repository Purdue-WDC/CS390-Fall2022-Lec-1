import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import App, { CounterContext } from 'app';
import Home from './components/Home'
import Resume from './components/Resume';
import User from './components/User';
import About from './components/About';
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
        <Link to='/'>
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
          index // equivalent to path=""
          element={<Home/>}
        />
        <Route
          path="resume" // path = '/' + 'resume'
          element={<Resume/>}
        />
        
        {/* NESTED ROUTING */}
        <Route
          path="about" // route: /about
          element={<About/>} // NOTE: see that it contains <Outlet/>, and that contact and founding will be rendered there
        >
          <Route
            path="contact" // route: /about/contact
            element={<Contact/>} 
          />
          <Route
            path="founding" // route: /about/founding
            element={<Founding/>} 
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

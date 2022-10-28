import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import CounterContext from './context/CounterContext';

const App = () => {
  // REQUIREMENT 2.
  const [ count, setCount ] = useState(0);

  // REQUIREMENT 4A. Empty dependency array = run on MOUNT
  useEffect(() => {
    console.log('APP MOUNTED');
    setCount(count + 1);
  }, []);

  // REQUIREMENT 4B. Update count after every second.
  useEffect(() => {
    setTimeout(() => {
      console.log('A SECOND PASSED');
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
          path='/counter'
          element={ // REQUIREMENT 3. Wrap all children that will need access to the count with the context's provider.
            <CounterContext.Provider value={[ count, setCount ]}>
              <Counter/>
            </CounterContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
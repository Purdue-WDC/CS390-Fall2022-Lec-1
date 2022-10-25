import { useState } from 'react'
import DataContext from './DataContext';
import Display from './Display';

function App() {
  // create a state to be passed down via useContext.
  const [ temp, setTemp ] = useState(0);
  
  return (
    <div className="App">
      {/* wrap display component in the context.provider tags so that its value can be accessed within all children components */}
      <DataContext.Provider value={{temp, setTemp}}>
        <Display/>
      </DataContext.Provider>
    </div>
  );
}

export default App;

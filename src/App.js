import './App.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Notes from './components/pages/Notes/Notes';
import CreateNotes from './components/pages/CreateNotes/CreateNotes';
import { useState } from 'react';

function App() {

  // State
  const [notes, setNotes] = useState([])
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes}/>} />
        <Route path='/createNotes' element={<CreateNotes setNotes={setNotes} />} />
       </Routes>
    </div>
  );
}

export default App;

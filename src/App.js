import './App.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Notes from './components/pages/Notes/Notes';
import CreateNotes from './components/pages/CreateNotes/CreateNotes';
import { useState } from 'react';
import SmallScreensNav from './components/pages/smallScreensNav/SmallScreensNav';

function App() {

  // State
  const [notes, setNotes] = useState(() => {
    const savedNote = localStorage.getItem('savedNote')
    return savedNote ? JSON.parse(savedNote) : []
  })
  const [style, setStyle] = useState(false)

  // Handlers
   const handleMenu = () => {
    setStyle(prev => !prev)
    }
    const handleCancel = () => {
      setStyle(prev => !prev)
      }

  return (
    <div className="App">
      <Navbar handleMenu={handleMenu} handleCancel={handleCancel} style={style}/>
      <div style={{display: style ? 'none': 'block'}}>
      <SmallScreensNav />
      </div>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes}/>} />
        <Route path='/createNotes' element={<CreateNotes setNotes={setNotes} />} />
       </Routes>
    </div>
  );
}

export default App;

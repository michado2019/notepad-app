import './App.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Notes from './components/pages/Notes/Notes';
import CreateNotes from './components/pages/CreateNotes/CreateNotes';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/createNotes' element={<CreateNotes />} />
       </Routes>
    </div>
  );
}

export default App;

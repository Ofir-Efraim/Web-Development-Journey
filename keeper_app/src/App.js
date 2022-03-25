import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Note from './components/Note/Note';
import Entry from './components/Entry/Entry';
function App() {
  const [notes, setNotes] = useState([])
  const addNote = (title, content) => {
    setNotes(pervItems => {
      return [...pervItems, {title:title, content:content}]
    });
  }
  const deleteNote = (id) => {
    setNotes(prevItems => {
      return prevItems.filter((item,index) => id!==index)
    }
    )}
  return (
    <div>
    <Header></Header>
    <Entry addNote={addNote}></Entry>
    {notes.map((note, index)=> <Note deleteNote={deleteNote} id={index} key={note.key} title={note.title} content={note.content}></Note> )}
    <Footer></Footer>
    </div>
  );
}

export default App;


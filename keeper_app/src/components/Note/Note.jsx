import React from 'react'

const Note = ({deleteNote,id, title, content}) => {
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={ () => deleteNote(id)}>delete</button>
    </div>
  )
}

export default Note
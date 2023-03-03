import React from 'react'
import "../Style/Notes.css"

const Notes = ({note}) => {
    console.log(note)
  return (
    <div id='Notes'>{note}</div>
  )
}

export default Notes
import React from 'react'
import "../Style/Notes.css"
import { AiFillDelete ,AiFillEdit} from 'react-icons/ai';

const Notes = ({props,handleDelete,handleEdit}) => {
  const {Title,Date,_id}=props
    //console.log(props)
  return (
    <div className='Notes'>
      <div className='delbtn' onClick={()=>handleDelete(_id)}><AiFillDelete/></div>
      <div className='editbtn' onClick={()=>handleEdit(_id)}><AiFillEdit/></div>
      <h3>{Title}</h3>
      <p>{Date}</p>
    </div>
  )
}

export default Notes
import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'

const Todo = (props) => {

const deleteItems = ()=>{
    console.log('deleted')
}

  return (
    <>
    <div className='todo_style'>
        <span className='fa-times'area-hidden="true" onClick={() => {
            props.onSelect(props.id);
        }}>X</span>
   <li> {props.text} </li>
   </div>
   </>
  );  
  
};

export default Todo

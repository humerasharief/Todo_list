import React from 'react'

export default function TodoList({task, id, onDelete}) {
    return( 
        <div className='list-item'>
          {task.title}
          <button class="delete is-pulled-right" onClick= {() => onDelete(task.id)}></button>
        </div>
      );
 }

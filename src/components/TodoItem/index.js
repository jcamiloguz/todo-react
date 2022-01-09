import React from 'react'
import './index.css'

function TodoItem({completed, text}) {
    return (
        <li className='todoItem'>
            <span className={`icon  icon-check ${completed && 'icon-check--active'}`}>
                ✔
            </span>
            <p className={`todoItem__text ${completed && 'todoItem__text--complete' }`}>
                {text}
            </p>
            <p className='icon icon-delete'>
               <span>x</span> 
            </p>
        </li>
    )
}

export {TodoItem}

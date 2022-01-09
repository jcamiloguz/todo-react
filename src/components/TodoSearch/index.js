import React from 'react'
import './index.css'
function TodoSearch() {
    return (
        <div className='search__container'>
            <input className='search'type="text" placeholder='Search a Todo ' />
        </div>
    )
}

export {TodoSearch}

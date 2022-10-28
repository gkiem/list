import React from 'react'
import {useState} from 'react'
import LibItems from './components/LibItems'

function Library() {
    const [libItem, setLibItem] = useState([
        {
            id:1,
            title:'The Imposter',
            text:'Long ago, in a haunted castle...'
        },
        {
            id:2,
            title:'The Recruiter',
            text:'So you want to join the army...'
        },
        {
            id:3,
            title:'The Guest',
            text:'I would like a room for the night...'
        }
    ]) 

    const closeItem = (id)=>{
            setLibItem(libItem.map((item)=>item.id===id ? //remove item.id===id and replace with true
          {...item,vis: !item.vis} : item
        )
      )
    }
    
  return (
    <div className='container'>
        <LibItems libItem={libItem} closeItem={closeItem}/>
    </div>
  )
}

export default Library

import React from 'react'
import {useState} from 'react'
import LibItems from './components/LibItems'

function Library() {
    const [isShown, setIsShown] = useState(true);
    const [libItem, setLibItem] = useState([
        {
            id:1,
            title:'The Imposter',
            text:'Long ago, in a haunted castle...'
        },
        {
            id:2,
            title:'The Conscriptor',
            text:'So you want to join the army...'
        },
        {
            id:3,
            title:'The Guest',
            text:'I would like a room for the night...'
        }
    ]) 

    const closeItem = (id)=>{
        //setLibItem(libItem.filter((item=>item.text !==id)))
        //item=>item.id //we have the id of the one we want gone. with id we select the item and remove 'text'
        setLibItem(libItem.map((item)=>item.id===id ? 
      {...item,vis: !item.vis} : item
    )
  )
    }
    
  return (
    <div>
         {/* {libItem.map(lib => <h1>{lib.title}</h1>)} WILL PRINT*/}
        <LibItems libItem={libItem} closeItem={closeItem} isShown={isShown}/>
    </div>
  )
}

export default Library

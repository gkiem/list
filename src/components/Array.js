import {useState} from 'react'

const Array = ({title}) => {
    const [items]= useState ([
        {
            id: 1,
            text: 'asdf',
            something: 'Texter'
        },
        {
            id: 2,
            text: 'qwerty',
            something: 'Texter'
        },
        {
            id: 3,
            text: 'lorem',
            something: 'Texter'
        }
    ])
  return (
    <div>
        <h1>{title}</h1>
        {items.map((item)=>(<h3 key={item.id}>{item.text}</h3>))}
    </div>
  )
}

export default Array

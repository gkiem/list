import React, {useState} from 'react'

const Filter = () => {
 
    const list = [
        'Vin', 'Ägg', 'Dator', 'Penna', 'Hörlurar', 'Säck'
        ,'Tallrik', 'Cykel', 'Tak', 'Tillfälle', 'Koncept'
        , 'Kod', 'Högt', 'Lampa' 
    ]
    const [filter,setFilter] = useState('') // uppdaterar dom-strukturen

  return (
    <div><h1>Filter</h1>
      <form>
        <input type='text' onChange={e => {setFilter(e.target.value)}}></input>
      </form>
      {list.filter(answer => answer.includes(filter)).map((filteredList) => (
             <h1>{filteredList}</h1>
    ))}
    </div>
  )
}

export default Filter

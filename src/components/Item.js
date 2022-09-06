const Item = ({item, closeItem}) => {
  return (
    <div>
     <h1 style={{cursor:'pointer',
        borderBottom:'1px solid black'}}
        onClick={()=>closeItem(item.id)}>
        {item.title}
        
    </h1>
     <h3 className={`item ${item.vis ? 
        'vis' : ''}`}>
            {item.text}</h3>
    </div>
  )
}

export default Item

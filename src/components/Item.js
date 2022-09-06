const Item = ({item, closeItem, isShown}) => {
  return (
    <div>
     <h1 style={{width:'30%',cursor:'pointer',
        borderBottom:'1px solid black'}}
        onClick={()=>closeItem(item.id)}>
        {item.title}
        
    </h1>
    {isShown && (
     <h3 className={`item ${item.vis ? 
        'vis' : ''}`}>
            {item.text}</h3>
      
    )}
    </div>
  )
}

export default Item

import Item from './Item'

const LibItems = ({libItem, closeItem}) => {
  return (
    <>
      {libItem.map((item) => (
      <Item key={item.id}
      item={item}
      closeItem={closeItem}/>
      ))}
      </>
  )
  }
export default LibItems
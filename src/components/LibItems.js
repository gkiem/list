import Item from './Item'

const LibItems = ({libItem, closeItem, isShown}) => {
  return (
    <>
      {libItem.map((item) => (
      <Item key={item.id}
      item={item}
      closeItem={closeItem}
      isShown={isShown}/>
      ))}
      </>
  )
  }
export default LibItems
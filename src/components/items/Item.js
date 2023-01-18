


const Items = ({producto}) => {
  return( 
  <li>
    <img alt={producto.title} src={producto.image} width="200" />
    <h2>{producto.title}</h2>
    <h3>{producto.description}</h3>
    <h3>{producto.price}</h3>

  </li>)
      
}

export default Items
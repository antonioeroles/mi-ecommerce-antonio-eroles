

const ItemDetail = ({product}) => {
  return (
    <div>
        <li>
            <img alt={product.title} src= {product.image} />
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
        </li>
    </div>
  )
}

export default ItemDetail
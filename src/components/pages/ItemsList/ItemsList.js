import Item from "../../items/Item"
import { Link } from "react-router-dom"

const ItemsList = ({productos}) => {
  return (
    <ul>
        {productos.map ((producto) =>(
          <Link key={producto.id} to= {`item/${producto.id}`}>
            <Item producto={producto}/>
          </Link>
        )
        )
        }
    </ul>
  )
}

export default ItemsList
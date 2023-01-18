import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function SizesExample() {
    const [contador, setContador] = useState (0);
    const stock = 8

    const onAdd = () => {
        if (stock === contador) {
          alert ("No tenemos suficiente stock")
          return  
        }
        setContador(contador + 1);
    };
    const subtract = () => {
        if (contador === 0) {
          return  
        }
        setContador(contador - 1);
    };
  return (
    <>
      <div className="mb-2">
            <Button variant="primary" size="lg">
            Agregar al Carrito
            </Button>{' '}
        </div>
        <div>
        <Button onClick={subtract} variant="outline-success"> - </Button>{' '}
        <Button variant="outline-success">{contador}</Button>{' '}
        <Button onClick={onAdd} variant="outline-success"> + </Button>{' '}
        </div>
      
    </>
  );
}

export default SizesExample;
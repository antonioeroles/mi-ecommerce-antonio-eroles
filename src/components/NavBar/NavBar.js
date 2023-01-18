import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgets from '../CartWidgets/CartWidgets';



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="me-auto Barra">
            <Nav.Link  href ="/">Home</Nav.Link>
            <Nav.Link  href ="/category/Cocktails">Cocktails</Nav.Link>
            <Nav.Link  href ="/category/vinos">Vinos</Nav.Link>
            <Nav.Link  href ="/category/Champagne">Champagne</Nav.Link>
          </Nav>
          <CartWidgets />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar>
        <Container className="d-flex justify-content-between p-0 bg-primary">
          <Navbar.Brand href="#home" className="text-white">Navbar</Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>About</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    return (
        <>
            <Navbar fixed="top" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="data:image/jpeg;base64,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Ja0dQFrYYfneqY6HLu+Idj4fOx7O7pbYtj5VNGufLCKdnMUNnz7ADpjZzY3WxDb4PeOJ6P0sQA3zXvXuk0Sw84Q+pILo4GkbRJuA5x+YzDM9dgclW7XDW+q0pLzlQ/oj4ETbiNg/hbx4uOJ9Cw9bVyTPdJK9z5HHac9xLnE8SSuhAREQEREHp0fXS07xJC9zJBk5psesdY6l11VQ6V7nvO09xLnE7ycyupEBERB7W6VmELoOcPNOLXFuBxaCBY5gdI4DBeJEQEREBERBndR9Kto66nqHkBsb9okgkW2SMhjfHDrsraUFc18LJAeca5oc14IeHXxuHMwI61S5bhqFyhVWiX2aTLTE3fA5xDetzD8x3WMDvBwsEqd0TUMdQQtaQXNqmbQ3i8M1rhV7Uy8qesVNpikpRQuvI6YF8R2WODubktzlza4AdY3ticSockYWkg5gkHyjNBxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB9BXxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"
                            width="75"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#home">Doom Arena</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Arenas</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

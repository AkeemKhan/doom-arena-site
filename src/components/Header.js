import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    return (
        <>
            <Navbar fixed="top" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="home">
                        <img
                            src="/images/doom-arena-logo.png"
                            width="112.5"
                            height="75"
                            className="d-inline-block align-top"
                            alt="Doom Arena"
                        />
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#home">Doom Arena</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="guide">Guide</Nav.Link>
                        <Nav.Link href="arenas">Arenas</Nav.Link>
                        <Nav.Link href="download">Download</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

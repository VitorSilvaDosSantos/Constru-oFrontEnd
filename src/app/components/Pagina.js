
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="./">Página Inicial</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                        <Nav.Link href="/clientes">Clientes</Nav.Link>
                        <Nav.Link href="/array">Array</Nav.Link>
                        <Nav.Link href="/objetos">Carros</Nav.Link>
                        <Nav.Link href="/nomes">Nomes</Nav.Link>
                        <Nav.Link href="/numero">Numero</Nav.Link>
                        <Nav.Link href="/disney">Disney</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <div className="bg-secondary text-white text-center text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>

        </>
    )
}
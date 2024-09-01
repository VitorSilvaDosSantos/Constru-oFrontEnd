'use client'

import { Card, Col, Row, Button } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/services/apiDisney";
import { useRouter } from 'next/navigation';

export default function Objetos() {
    const [personagens, setPersonagens] = useState([]);
    const router = useRouter(); // Usando para navegar nas páginas

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data);
        });
    }, []);

    // Estilo inline para o botão
    const buttonStyle = {
        backgroundColor: 'black',
        borderColor: 'black',
        color: 'white',
        marginBottom: '10px',
    };

    return (
        <Pagina titulo="Disney Cards">
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Button variant="dark" onClick={() => router.push('/disney')}>
                     Disney
                </Button>
            </div>
            <Row md={3}>
                {personagens.map(item => (
                    <Col key={item._id} className="my-2"> {}
                        <Card>
                            <Card.Img variant="top" src={item.imageUrl} height={200} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    );
}

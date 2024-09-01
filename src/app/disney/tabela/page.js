'use client'

import Table from 'react-bootstrap/Table';
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/services/apiDisney";
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

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
        <Pagina titulo="Disney Table">
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Button variant="dark" onClick={() => router.push('/disney')}>
                     Disney
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map(item => (
                        <tr key={item._id}> {}
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.imageUrl} height={55} alt={item.name} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}

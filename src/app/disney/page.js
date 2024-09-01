'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from 'next/navigation';

export default function Disney() {
    const [personagens, setPersonagens] = useState([]);
    const router = useRouter(); // Usando para navegar nas páginas

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data);
        });
    }, []);

    // Estilo inline para os botões
    const buttonStyle = {
        backgroundColor: 'black',
        borderColor: 'black',
        color: 'white',
        marginRight: '40px', 
        marginBottom: '10px', 
    };

    return (
        <Pagina titulo="Disney">
            <div style={{ display: 'flex', gap: '10px' }}> {}
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Button variant="dark" onClick={() => router.push('/disney/cards')}>
                     Disney Cards
                </Button>
            </div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Button variant="dark" onClick={() => router.push('/disney/tabela')}>
                     Disney Tabela
                </Button>
            </div>

            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Button variant="dark" onClick={() => router.push('/disney/carrossel')}>
                     Disney Carrossel
                </Button>
            </div> </div>
            
            <br/>
            <hr/>
            {personagens.map(item => (
                <p key={item._id}>{item.name}</p>
            ))}
        </Pagina>
    );
}

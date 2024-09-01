'use client'

import Carousel from 'react-bootstrap/Carousel';
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/services/apiDisney";
import { Button } from "react-bootstrap"; 
import { useRouter } from 'next/navigation'; 

export default function Objetos() {
    const [personagens, setPersonagens] = useState([]);
    const router = useRouter();

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Carrossel">
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Button variant="dark" onClick={() => router.push('/disney')}>
                     Disney
                </Button>
            </div>
            <Carousel>
                {personagens.map(item => (
                    <Carousel.Item key={item._id}>
                        <img src={item.imageUrl}  width="100%" height={450} alt={item.name} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Pagina>
    )
}

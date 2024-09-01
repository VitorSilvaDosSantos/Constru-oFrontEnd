'use client'

import Pagina from "../components/Pagina";

export default function Array() {

    const carros = ['Corsa', 'Uno', 'Sentra', 'Civic', 'Belina']
    const pessoas = ['Vitor', 'Moisés', 'Kauan', 'Anderson']

    return (
        <Pagina titulo="Página de Array">

            {carros.map(item => (
                <p>{item}</p>
            ))}

            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

        </Pagina>
    )
}
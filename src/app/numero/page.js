'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page() {

    const [numero, setNumero] = useState(0)

    function diminuirNumero() {
        setNumero(numero - 1)
    }

    function aumentarNumero() {
        setNumero(numero + 1)
    }

    return (
        <Pagina titulo={"Numero: " + numero}>



            <Button onClick={diminuirNumero}>-</Button>
            <h1>{numero}</h1>
            <Button onClick={aumentarNumero}>+</Button>
        </Pagina >
    )
}
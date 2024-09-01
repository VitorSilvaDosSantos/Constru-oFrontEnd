'use client'

import Button from 'react-bootstrap/Button';
import Pagina from "../components/Pagina";
import { Card, Row, Col } from 'react-bootstrap';

export default function Array() {

    const carros = [
        { id: 1, marca: 'GM', modelo: 'Corsa', Ano: 1996, foto: 'https://heycar.com.br/media/plg_jspeed/cache/images/Chevrolet-Corsa-2P-96.webp' },
        { id: 2, marca: 'Fiat', modelo: 'Uno', Ano: 2013, foto: 'https://cdn.motor1.com/images/mgl/2Npxqp/251:0:3996:3000/fiat-uno-grazie-mille.webp' },
        { id: 3, marca: 'Nisan', modelo: 'Sentra', Ano: 2015, foto: 'https://ogimg.infoglobo.com.br/in/16573422-2d5-3d1/FT1086A/UNIQUE_12.jpg' },
        { id: 4, marca: 'Honda', modelo: 'Civic', Ano: 2020, foto: 'https://cdn.diariodajaragua.com.br/img/pc/780/780/dn_coluna_post_imagem/2019/08/honda-civic-touring-2020.jpg' },
        { id: 5, marca: 'Ford', modelo: 'Belina', Ano: 1994, foto: 'https://ast.prd.karvi.com.ar/br_importer/spyne/ASST-br_importer-01HS4KWWPJSVVPFQBARX7KMN8M.jpg' },
        { id: 6, marca: 'Peugeot', modelo: '206', Ano: 2008, foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2021/03/2006-PEUGEOT-206-CABRIOLET-1.jpg?fit=1500%2C1000&ssl=1' },
    ]
    return (
        <Pagina titulo="Objetos">
            <Row md={4}>
                {carros.map(item => (
                    <Col className="my-3">
                        <Card>
                            <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={item.foto} />
                            <Card.Body>
                                <Card.Title>{`${item.marca} - ${item.modelo}`}</Card.Title>
                                <Card.Text>
                                    Ano: <b>{item.Ano}</b>
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

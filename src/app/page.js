'use client'

import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {


  return (
   <Pagina titulo='Página Inicial'> 
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho  titulo="Página inicial"sub="Vitor Silva" subtitulo="Sucesso e avante"/>
      <Cabecalho  titulo="Bootstrap"sub="Sucesso" subtitulo="Deus é fiel"/>
      <Cabecalho  titulo="React"sub="Vitoria" subtitulo="Chama no piseiro"/>
      <Cabecalho  titulo="JSX"sub="Frntend" subtitulo="Glória"/>

      
      <Link href="/fundamentos">Página fundamentos</Link> <br />
      <Link href="/clientes"> Página Clientes</Link>

      </Pagina>
  );
}

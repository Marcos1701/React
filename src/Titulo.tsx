import React from 'react';

interface TituloProps {
    texto: string;
}

const Titulo: React.FC<TituloProps> = (props) => {
    return <h1 style={{ color: '#4c8b64' }}>{props.texto}</h1>;
};


export default Titulo;
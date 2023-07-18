import React, { FC } from 'react';

interface TituloProps {
  texto: string;
}

const Titulo: FC<TituloProps> = (props) => {
  return <h1>{props.texto}</h1>;
};

const App: FC = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};

export default App;

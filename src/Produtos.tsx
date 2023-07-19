import { FC } from 'react';
import Titulo from './Titulo';
import Produto from './Produto';
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const Produtos: FC = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
    return (
        <section>
            <Titulo texto="Produtos" />
            {produtos.map((produto) => (
                <Produto produto={produto} />
            ))}
        </section>
    );
}

export default Produtos;
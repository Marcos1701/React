import { FC } from 'react';
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos: FC = () => {
    return (
        <main>
            <h1>Produtos</h1>
            {produtos.map((produto) => (
                <div key={produto.nome}>
                    <h2>{produto.nome}</h2>
                    <ul>
                        {produto.propriedades.map((propriedade) => (
                            <li key={propriedade}>{propriedade}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </main>
    );
}

export default Produtos;
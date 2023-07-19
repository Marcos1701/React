import { FC } from "react";

interface ProdutoProps {
    nome: string,
    propriedades: string[]
}

interface Props {
    produto: ProdutoProps
}

const Produto: FC<Props> = ({ produto }) => {
    return (
        <>
            <div key={produto.nome} style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
                <p>{produto.nome}</p>
                <ul>
                    {produto.propriedades.map((propriedade) => (
                        <li key={propriedade}>{propriedade}</li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Produto
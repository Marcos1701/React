// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
interface Cliente {
    cliente: string,
    idade: number,
    compras: { nome: string, preco: string }[],
    ativa: boolean
};

const luana: Cliente
    = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario: Cliente = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const App = () => {
    const dados = luana;
    const total_gasto: number = dados.compras.map(
        (item) => Number(item.preco.replace("R$ ", ""))
    ).reduce((a, b) => a + b);

    return (<div>
        <p id="nome_cliente">Nome: {dados.cliente}</p>
        <p id="idade_cliente">Idade: {dados.idade}</p>
        <p id="situacao_cliente">Situação: <span style={{ color: dados.ativa ? "green" : "red" }}>{dados.ativa ? "Ativa" : "Inativa"}</span></p>
        <p id="total_gasto">Total gasto: R$ {total_gasto}</p>
        {total_gasto > 10000 && <p>Você tem gastado bastante, hein?</p>}

        {dados.compras.length > 0 ?
            <div>
                <h3>Lista de produtos:</h3>
                <ul>
                    {dados.compras.map((item, index) => <li key={index}>{item.nome} - {item.preco}</li>)}
                </ul>
            </div>
            : <p>Não há compras registradas</p>
        }
    </div>
    );
};

export default App;

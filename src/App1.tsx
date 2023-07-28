import { useRef } from 'react';
import Playeryoutube from "./Player_youtube";

const valida_url = (url: string) => {

    if (url.length >= 24 && url.includes("www.youtube.com/watch?v=")) {
        return true;
    }
    return false;
}



function Entradas(): JSX.Element {

    const estilo_msg_erro = {
        color: "red",
        fontSize: "1.5rem",
        fontWeight: "bold",
        margin: "1rem 0"
    }

    const url = useRef<HTMLInputElement>(null);
    let url_atual = "";

    let exibir_url: boolean = false;
    return (
        <>
            <label htmlFor="url_youtube">URL do vídeo: </label>
            <input type="url" id="url_youtube" ref={url} />

            <br />
            <div id="msg_erro" style={estilo_msg_erro}></div>
            <button onClick={() => {
                if (url.current && valida_url(url.current.value)) {
                    url_atual = url.current.value;
                    exibir_url = true;
                } else {
                    const msg_erro = document.getElementById("msg_erro") as HTMLDivElement;
                    msg_erro.innerHTML = "URL inválida";

                    setTimeout(() => {
                        msg_erro.innerHTML = "";
                    }
                        , 3000);

                }
            }
            }>Exibir</button>

            {exibir_url &&
                <div id='player'>
                    <Playeryoutube src={url_atual} />
                </div>
            }
        </>
    )
}

const App = () => {
    return (
        <>
            <header className="App-header">
                <h2>
                    Youtube Player
                </h2>
            </header>

            <body className='body-App'>
                <Entradas />
            </body>
        </>
    );
}

export default App;
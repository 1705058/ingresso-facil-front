import { ReactComponent as Ok } from 'assets/img/ok.svg'
import { Link } from 'react-router-dom';


function Finished() {


    return (

        <div className="containerf">
            <div className="finished">
                <p className='frase'>SEU PAGAMENTO FOI APROVADO!</p>

                <p>Seu Pagamento foi efetuado com sucesso,</p>
                <p> você receberá um e-mail com todas as informações.</p>

                <div className="imagem">
                    <Ok />
                </div>

                <div className="imagem">
                    <Link to="/">
                        <button className="btn btn-primary dsmovie-btn mt-3">Ir para página inicial</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Finished;
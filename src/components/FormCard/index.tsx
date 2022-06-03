
import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    const now = new Date();
    
    const current0 = now.getDate()+1 + '/' + now.getMonth() + '/' + now.getFullYear() + ' - ' + now.getHours() + ':00';
    const current1 = now.getDate()+2 + '/' + now.getMonth() + '/' + now.getFullYear() + ' - ' + now.getHours() + ':00';
    const current2 = now.getDate()+3 + '/' + now.getMonth() + '/' + now.getFullYear() + ' - ' + now.getHours() + ':00';
    const current3 = now.getDate()+4 + '/' + now.getMonth() + '/' + now.getFullYear() + ' - ' + now.getHours() + ':00';
    const current4 = now.getDate()+5 + '/' + now.getMonth() + '/' + now.getFullYear() + ' - ' + now.getHours() + ':00';


    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = (event.target as any).email.value;
        const dataHora = (event.target as any).dataHora.value;
        const nome = (event.target as any).nome.value;
        const cartaoCredito = (event.target as any).cartaoCredito.value;
        const cpf = (event.target as any).cpf.value;
        const codigoDeSeguranca = (event.target as any).codigoDeSeguranca.value;
        const validade = (event.target as any).validade.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/purchases',
            data: {
                movieId: movieId,
                email: email,
                dataHora: dataHora,
                nome: nome,
                cartaoCredito: cartaoCredito,
                cpf: cpf,
                codigoDeSeguranca: codigoDeSeguranca,
                validade: validade
            }
        }
        axios(config).then(response => {
            navigate("/finished");
        });
    }

    return (
        <div className="ingressofacil-form-container">
            <img className="ingressofacil-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="ingressofacil-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="ingressofacil-form" onSubmit={handleSubmit}>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="dataHora">Informe data e horário</label>
                        <select className="form-control" id="dataHora">
                            <option>{current0}</option>
                            <option>{current1}</option>
                            <option>{current2}</option>
                            <option>{current3}</option>
                            <option>{current4}</option>
                        </select>
                    </div>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="nome">Nome completo</label>
                        <input type="nome" className="form-control" id="nome" />
                    </div>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input type="cpf" className="form-control" id="cpf" />
                    </div>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="cartaoCredito">Número do cartão de crédito</label>
                        <input type="cartaoCredito" className="form-control" id="cartaoCredito" />
                    </div>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="codigoDeSeguranca">Código de Segurança</label>
                        <input type="codigoDeSeguranca" className="form-control" id="codigoDeSeguranca" />
                    </div>
                    <div className="form-group ingressofacil-form-group">
                        <label htmlFor="validade">Validade</label>
                        <input type="validade" className="form-control" id="validade" />
                    </div>
                    <div className="ingressofacil-form-btn-container">
                        <button type="submit" className="btn btn-primary ingressofacil-btn">Finalizar compra</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary ingressofacil-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >

    );
}

export default FormCard;
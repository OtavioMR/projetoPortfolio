import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/login.css';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app, db } from "../../firebase/firebaseConfig";


function Login() {

    const auth = getAuth(app);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            alert('Login realizado com sucesso!');
            navigate('/admin/Dashboard');
        } catch (error) {
            alert('Erro: ' + error.message);
        }
    };

    return (
        <div className="container px-3 px-md-0 py-0 my-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                    <div className="cardLogin my-3 p-5">
                        <form onSubmit={handleLogin}>
                            <div>
                                <h2 className='text-center my-5'>Login Administrador</h2>
                            </div>

                            <div className='campoLogin py-3'>
                                <label htmlFor="email" className='col-12 mx-3'>Email: </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Insira seu email"
                                    required
                                    className="col-12"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='campoLogin py-3'>
                                <label htmlFor="senha" className='col-12 mx-3'>Senha: </label>
                                <input
                                    type="password"
                                    id="senha"
                                    placeholder="Insira sua senha"
                                    required
                                    className="col-12"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <div className="campoLogin pt-3 d-flex justify-content-center align-items-center">
                                <button type="submit" id='entrar' className='botaoEnviar py-1'>Entrar</button>
                            </div>

                            <div className="campoLogin pt-3 d-flex justify-content-center align-items-center">
                                <Link to="/admin/Register">Cadastrar conta</Link>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;

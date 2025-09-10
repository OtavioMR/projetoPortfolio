import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { app, db } from "../../firebase/firebaseConfig";

function Register() {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // 1️⃣ Cria o usuário no Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            // 2️⃣ Cria documento no Firestore com o mesmo UID
            await setDoc(doc(db, "usuario", user.uid), {
            });

            alert('Usuário registrado e coleção criada com sucesso!');
            navigate('/admin/dashboard');
            // redirecionamento opcional:
           
        } catch (error) {
            alert('Erro: ' + error.message);
        }
    };

    return (
        <div className="container px-3 px-md-0 py-0 my-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                    <div className="cardLogin my-3 p-5">
                        <form onSubmit={handleRegister}>
                            <div>
                                <h2 className="text-center my-5">Registrar usuário</h2>
                            </div>

                            <div className="campoLogin py-3">
                                <label htmlFor="email" className="col-12 mx-3">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Insira seu email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="col-12"
                                />
                            </div>

                            <div className="campoLogin py-3">
                                <label htmlFor="senha" className="col-12 mx-3">Senha:</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Insira sua senha"
                                    required
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="col-12"
                                />
                            </div>

                            <div className="campoLogin pt-3 d-flex justify-content-center align-items-center">
                                <button type="submit" id='entrar' className='botaoEnviar py-1'>Entrar</button>
                            </div>

                            <div className="campoLogin pt-3 d-flex justify-content-center align-items-center">
                                <Link to="/admin/Login">Já possuo cadastro</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

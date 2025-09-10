import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Dashboard.css';
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export default function DashboardPerfil() {
    const [foto, setFoto] = useState(null);
    const [nome, setNome] = useState('');

    function handleFotoChange(e) {
        const arquivo = e.target.files[0];
        if (arquivo) {
            setFoto(URL.createObjectURL(arquivo));
        }
    }





    const [uid, setUid] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;

        if (usuarioLogado) {
            setUid(usuarioLogado.uid); // pega o ID do usuário logado
        }
    }, []);



    return (

        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                <div className="cardLogin my-3 p-5">
                    <h2 className="text-center my-5">Perfil</h2>

                    {/* Foto de Perfil */}
                    <div className="campoFoto d-flex flex-column align-items-center py-3">
                        {foto ? (
                            <img src={foto} alt="Foto de perfil" className="fotoPerfil" />
                        ) : (
                            <div className="semFoto">Sem foto</div>
                        )}
                        <p className="my-3">Escolha sua foto de perfil</p>
                        <input type="file" accept="image/*" onChange={handleFotoChange} className="col-12" />
                    </div>

                    {/* Nome */}
                    <div className="row campoNome justify-content-center py-3">
                        <div className="col-auto d-flex align-items-center">
                            <p className="mb-0 me-2">Insira seu nome:</p>
                            <input
                                type="text"
                                className="form-control"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                        </div>
                        <br /><br />
                        {uid ? (
                                <p>UID do usuário logado: {uid}</p>
                            ) : (
                                <p>Carregando UID...</p>
                            )}
                    </div>

                </div>
            </div>
        </div>

    );
}

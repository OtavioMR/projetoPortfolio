import { use, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Dashboard.css';

export default function DashboardProjetos() {

    return (

        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                <div className="cardLogin my-3 p-5">
                    <h2 className=" py-3 ">Projetos</h2>

                    <div className="cargo mb-3">
                        <p className="mb-0">Nome do projeto:</p>
                        <input type="text" />
                    </div>

                    <div className="data mb-3">
                        <p className="mb-0">Data início:</p>
                        <input type="text " className="mb-3" />

                        <p className="mb-0">Data fim:</p>
                        <input type="text" />
                    </div>

                    <div className="sobreCargo my-3">
                        <label htmlFor="mensagem" className="mb-1">Sobre o projeto:</label>
                        <textarea
                            name="mensagem"
                            id="sobreCargo"
                            rows={4}
                            cols={50}
                            placeholder="Dê uma breve explicação sobre o seu curso..."
                            className="form-control"
                        />
                    </div>

                </div>
            </div>
        </div>

    );
}

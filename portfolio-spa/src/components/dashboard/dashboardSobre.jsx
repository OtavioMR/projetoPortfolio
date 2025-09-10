import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Dashboard.css';

export default function DashboardSobre() {
    const [mensagem, setMensagem] = useState("");

    return (

        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                <div className="cardLogin my-3 p-5">
                    <h2 className="p-5">Sobre mim</h2>
                    <label htmlFor="mensagem"></label>
                    <textarea id="mensagem" value={mensagem} onChange={(e) =>
                        setMensagem(e.target.value)}
                        rows={4}
                        cols={50}
                        className="form-control"
                        placeholder="Digite seu texto sobre voçê..."
                    />

                </div>
            </div>
        </div>

    );
}

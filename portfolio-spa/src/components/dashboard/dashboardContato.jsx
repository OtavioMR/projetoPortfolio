import { use, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Dashboard.css';

export default function DashboardContato() {

    return (

        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                <div className="cardLogin my-3 p-5">
                    <h2 className=" py-3 ">Contato</h2>

                    <div className="cargo mb-3">
                        <p className="mb-0">Email para contato:</p>
                        <input type="email" />
                    </div>

                    
                    <div className="cargo mb-3">
                        <p className="mb-0">Telefone para contato:</p>
                        <input type="telefone" />
                    </div>

                    
                    <div className="cargo mb-3">
                        <p className="mb-0">Localidade (empresa ou casa):</p>
                        <input type="text" />
                    </div>

                    
                    <div className="cargo mb-3">
                        <p className="mb-0 bi bi-instagram"> Link instagram:</p>
                        <input type="text" />
                    </div>

                    <div className="cargo mb-3">
                        <p className="mb-0 bi bi-linkedin"> Link Linkedin:</p>
                        <input type="text" />
                    </div>

                    <div className="cargo mb-3">
                        <p className="mb-0 bi bi-github"> Link GitHub:</p>
                        <input type="text" />
                    </div>

                  
                      
                   

                </div>
            </div>
        </div>

    );
}

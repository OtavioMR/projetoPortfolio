import { use, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Dashboard.css';

export default function DashboardProfissional() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };



    return (

        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mb-0">
                <div className="cardLogin my-3 p-5">
                    <h2 className=" py-3 ">Histórico profissional</h2>

                    <div className="cargo mb-3">
                        <p className="mb-0">Cargo:</p>
                        <input type="text" />
                    </div>

                    <div className="data mb-3">
                        <p className="mb-0">Data início:</p>
                        <input type="text " className="mb-3" />

                        <p className="mb-0">Data fim:</p>
                        <input type="text" />
                    </div>

                    <div className="sobreCargo my-3">
                        <label htmlFor="mensagem" className="mb-1">Sobre o cargo:</label>
                        <textarea
                            name="mensagem"
                            id="sobreCargo"
                            rows={4}
                            cols={50}
                            placeholder="Dê uma breve explicação sobre o seu cargo..."
                            className="form-control"
                        />
                    </div>

                    <div className="competenciaCargo my-3 d-flex justify-content-center align-items-center text-center">
                        <label htmlFor="mensagem" className="mb-1">Competências do cargo:</label>
                        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                        <button onClick={addTask} className="m-3 text-center align-items-center">Adicionar</button>
                        
                        <ul>
                            {tasks.map((task, index) => (
                                <li className="my-3" key={index}>{task}</li>
                            ))}
                        </ul>

                    </div>


                </div>
            </div>
        </div>

    );
}

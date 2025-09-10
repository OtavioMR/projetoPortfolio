export default function HistoricoProfissional() {
    return (
        <>
            <section className='historicoProfissional py-4 m-3'>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <h2><b>Histórico Profissional</b></h2>
                    </div>

                    {[1, 2].map((_, i) => (
                        <div key={i} className="col-lg-5 col-md-10 m-3">
                            <div className="cardProfissao p-4">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h3><b>Desenvolvedor Júnior</b></h3>
                                    </div>
                                    <div className="col-12 text-center mb-3">
                                        <small>20/02/2025 - atualmente</small>
                                    </div>
                                    <div className="col-12 mb-3 text-center">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="col-12">
                                        <ul className='competenciasProfissao ps-0 text-center'>
                                            <li className='py-1'><b>Trabalho com VR</b></li>
                                            <li className='py-1'><b>Edição de vídeos</b></li>
                                            <li className='py-1'><b>Desenvolvimento com Unity</b></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
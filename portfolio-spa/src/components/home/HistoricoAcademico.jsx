import imagemFaculdade from '../../assets/images/imagemFaculdade.png';

export default function historicoAcademico() {
    return (
        <>
            <section className='historicoAcademico py-4 m-3'>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <h2><b>Histórico Acadêmico</b></h2>
                    </div>

                    {[1, 2].map((_, i) => (
                        <div key={i} className="col-lg-5 col-md-10 m-3">
                            <div className="cardProfissao p-4">
                                <div className="row">
                                    <div className="col-12 text-center mb-3">
                                        <img src={imagemFaculdade} alt="" className='fotoHistorico' />
                                    </div>
                                    <div className="col-12 text-center">
                                        <h3><b>Desenvolvimento de Software Multiplataforma</b></h3>
                                    </div>
                                    <div className="col-12 text-center mb-3">
                                        <small>13/02/2025 - 12/12/2027</small>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
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
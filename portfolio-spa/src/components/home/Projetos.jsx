import fotoProjeto from '../../assets/images/projeto2.png';
export default function Projetos() {
    return (
        <>
            <section className='projetos py-4 m-3'>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <h2><b>Projetos</b></h2>
                    </div>

                    {[1, 2].map((_, i) => (
                        <div key={i} className="col-lg-5 col-md-10 m-3">
                            <div className="cardProjetos p-3 text-center">
                                <div className="fotoProjeto">
                                    <img src={fotoProjeto} alt="" className="img-fluid" />
                                </div>
                                <div className="tituloProjeto mt-3">
                                    <h4><b>Chronos Lux</b></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
import fotoCertificado from '../../assets/images/fotoCertificado.png';
export default function Certificados() {
    return (
        <>
            <section className='certificados py-4 m-3'>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <h2><b>Certificados</b></h2>
                    </div>

                    {[1, 2].map((_, i) => (
                        <div key={i} className="col-lg-5 col-md-10 m-3">
                            <div className="cardCertificado p-3 text-center">
                                <img src={fotoCertificado} alt="" className="img-fluid" />
                                <div className="tituloCertificado mt-3">
                                    <h4><b>Desenvolvimento Python</b></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
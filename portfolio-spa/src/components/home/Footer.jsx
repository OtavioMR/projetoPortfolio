export default function Footer() {
    return (
        <>
            <footer className='footerPortfolio w-100 mt-auto'>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-10 m-3">
                            <h5 className='mb-4'>Portfólio Otávio Monteiro</h5>
                            <p>Meu portfólio pessoal</p>
                            <div className="mt-4">
                                <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="text-white me-3"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-10 m-3">
                            <h5 className='text-uppercase mb-4'>Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white">Sobre</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Profissional</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Acadêmico</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Certificados</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Projetos</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-10 m-3">
                            <h5 className='text-uppercase mb-4'>Contato</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="bi bi-geo-alt me-2"></i>São Paulo, SP</li>
                                <li className="mb-2"><i className="bi bi-telephone me-2"></i> (11) 03223-2687</li>
                                <li className="mb-2"><i className="bi bi-envelope me-2"></i> otavio.monteiro.rodrigues@gmail.com</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="row align-items-center">
                            <div className="col-md text-center text-md-start">
                                <p className="mb-0">&copy; 2025 Portfólio Otávio Monteiro. Todos os direitos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
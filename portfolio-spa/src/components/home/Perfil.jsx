import minhaFoto from '../../assets/images/MinhaFotoPerfil.jpeg';

export default function Perfil() {
    return (
        <>
            {/* Perfil */}
            < section className="d-flex justify-content-center align-items-center py-4" >
                <div className="row w-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <img src={minhaFoto} alt="" className="fotoPerfil" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex justify-content-center">
                        <h1 className="nomeUsuario"><b>Otávio Monteiro</b></h1>
                    </div>
                </div>
            </section >

            {/* Sore mim */}
            <section className='sobreMim py-4 m-3'>
                        <div className="row justify-content-center">
                            <div className="col-md-12 mb-3 text-center">
                                <h2><b>Sobre mim</b></h2>
                            </div>
                            <div className="col-md-10">
                                <div className="cardSobre p-4">
                                    <p className="mb-0 text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates recusandae quae corrupti dolor beatae minima dolores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    );
}
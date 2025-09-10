import React from 'react';
import minhaFoto from './assets/images/MinhaFotoPerfil.jpeg';
import fotoProjeto from './assets/images/projeto2.png'
import certificadoPython from './assets/images/certificadoDigital.pdf';
import fotoDidi from './assets/images/fotoDidi.jpg'
import './App.css';

// import  Teste from './teste'

function App() {

  const projetos = [
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto },
    { titulo: "ChronosLux", descricao: "", imagem: fotoProjeto },
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto },
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto }
  ];

  const cargos = [
    { nomeCargo: "Desenvolvedor de projetos VR na USP", dataCargo: "(06/11/2006) - atualmente", responsabilidadesCargos: ["Criação de ambientes em realidade virtual", "Modelagem 3d"] },
    { nomeCargo: "Freelancer", dataCargo: "(26-12-2025)", responsabilidadesCargos: ["Criar portfólios", "Criar ecommerce"] }
  ];


  return (
    <>
      <header className='App-header'>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark colorNavBar">
          <div className="container my-2">
            <a className="navbar-brand" href="#sobre"><h1>Otávio Monteiro</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
                <li className="nav-item"><a className="nav-link" href="#projetos">Projetos</a></li>
                <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>




      <section className="d-flex justify-content-center align-items-center p-5 Foto-Perfil">
        <img src={fotoDidi} alt="Minha Foto" className="img-fluid minhaFoto" />
      </section>

      <div className="container text-center" style={{ paddingTop: '80px' }}>
        {/* SOBRE MIM */}
        <section id="sobre" className="my-5 mx-3">
          <h2 className="Sublinhado mb-4">Sobre Mim</h2>


          {/* <p>
            Olá! Meu nome é <strong>Otávio Monteiro</strong>, sou estudante de <strong>Desenvolvimento de Software Multiplataforma</strong> na <strong>Fatec de Cotia</strong>.
            Sou apaixonado por tecnologia, com foco em desenvolvimento frontend e interfaces intuitivas.
          </p>
          <p>
            Atualmente, estou construindo projetos em <strong>React</strong> e aprimorando minhas habilidades em JavaScript, CSS moderno e boas práticas de UI/UX.
          </p>
          <p>
            Acompanhe minha trajetória e se conecte comigo pelo LinkedIn:
            <a href="https://www.linkedin.com/in/otávio-monteiro-465559252/" target="_blank" rel="noreferrer">
              linkedin.com/in/otávio-monteiro
            </a>
          </p> */}



          <div className="row mx-3">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center py-3 card-sobreMim">
              <p className='sobre-mim'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita fugit dolorum quia eligendi, nam ducimus deleniti laboriosam libero accusantium alias rem voluptatem cupiditate at nobis, tempore, facere earum repudiandae.</p>
            </div>
            <div className="col-md-2"></div>
          </div>


        </section>





        {/* HISTÓRICO PROFISSIONAL */}
        <section id="historico-profissional" className="my-5 mx-3">
          <h2 className="Sublinhado mb-5">Histórico profissional</h2>


          <div className="row mx-3">
            <div className="col-md-2"></div>
            <div className="col-md-8 card-profissao py-4 pb-0">
              {cargos.map((cargo, index) => (
                <div key={index} className="mb-5">
                  <h2 className='nomeCargo'><b>{cargo.nomeCargo}</b></h2>
                  <p className='dataCargo'>{cargo.dataCargo}</p>
                  <ul className="listaCargo">
                    {cargo.responsabilidadesCargos.map((item, idx) => (
                      <li key={idx} className="responsabilidadesCargo">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </section>





        <section id="projetos" className="my-5 mx-3">
          <h2 className="Sublinhado text-center mb-4">Projetos</h2>
          <div className="row gy-4 gx-3">
            {projetos.map((projeto, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img src={projeto.imagem} alt="Foto-Projeto" className="card-img-top img-fluid" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{projeto.titulo}</h5>
                    <p className="card-text">{projeto.descricao}</p>
                    <a href="#" target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">Ver projeto</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* CERTIFICADOS E CURSOS */}
        <section id='certificados' className='my-5 mx-3'>
          <h2 className='Sublinhado text-center mb-4'>Certificados</h2>
          <div className="row gy-4 gx-3">
            <div className="col-md-6">
              <div className="card-certificados mx-4 mb-3 p-4">
                <p className='certificado-tittle'><b>Python Paideia</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores quam deserunt dicta sequi quisquam nesciunt cumque consequatur nihil reiciendis illum deleniti libero, perferendis ad corrupti soluta mollitia distinctio vel!</p>
                <a href={certificadoPython} target='_blank' className='btn btn-primary px-5 certificado-button'>Ver certificado</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-certificados mx-4 mb-3 p-4">
                <p className='certificado-tittle'><b>Python Paideia</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores quam deserunt dicta sequi quisquam nesciunt cumque consequatur nihil reiciendis illum deleniti libero, perferendis ad corrupti soluta mollitia distinctio vel!</p>
                <a href={certificadoPython} target='_blank' className='btn btn-primary px-5 certificado-button'>Ver certificado</a>
              </div>
            </div>

          </div>
        </section>





        {/* CONTATO */}
        <section id="contato" className="my-5 mx-3">
          <h2 className="Sublinhado mb-4">Contato</h2>
          <p>Email: otavio@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/otaviomonteiro" target="_blank" rel="noreferrer">linkedin.com/in/otaviomonteiro</a></p>
        </section>
      </div>
    </>
  );

  // return <Teste />;
}

export default App;

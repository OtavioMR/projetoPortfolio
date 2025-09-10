import React from 'react';
import '../App.css';
import Header from '../components/home/Header';
import Perfil from '../components/home/Perfil';
import HistoricoProfissional from '../components/home/HistoricoProfissional';
import HistoricoAcademico from '../components/home/HistoricoAcademico';
import Certificados from '../components/home/Certificados';
import Projetos from '../components/home/Projetos';
import Footer from '../components/home/Footer';

function Home() {
    return (
        <div className="app-wrapper d-flex flex-column min-vh-100">
            {/* Navbar */}
            <Header />
            {/* Conteúdo principal */}
            <main className="flex-grow-1 pt-5 mt-5">
                <div className="pt-4">
                    {/* Perfil e Sobre mim*/}
                    <Perfil />
                    {/* Histórico Profissional */}
                    <HistoricoProfissional />
                    {/* Histórico Acadêmico */}
                    <HistoricoAcademico />
                    {/* Certificados */}
                    <Certificados />
                    {/* Projetos */}
                    <Projetos />
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;

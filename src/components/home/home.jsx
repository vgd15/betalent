import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

function formatPhone(phone) {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function Home() {
    const [tabela, setTabela] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [openItems, setOpenItems] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/employees")
            .then(response => {
                setTabela(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar os posts:", error);
            });
    }, []);
    
    // Filtrando os funcionários com base em qualquer informação digitada
    const tabelaFiltrada = tabela.filter(item => 
        Object.values(item).some(value => 
            typeof value === "string" && value.toLowerCase().includes(filtro.toLowerCase())
        )
    );
    
    const toggleOpen = (id) => {
        setOpenItems(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    
    return (
        <section className="home">
            <div>
                <div className="search">
                    <h1>Funcionários</h1>
                    <input 
                        placeholder="Pesquisar"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                </div>
    
                <table className="desk">
                    <thead>
                        <tr>
                            <th>FOTO</th>
                            <th>NOME</th>
                            <th>CARGO</th>
                            <th>DATA DE ADMISSÃO</th>
                            <th>TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabelaFiltrada.map(tabela => (
                            <tr key={tabela.id}>
                                <td><img src={tabela.image} alt="Imagem do funcionário"/></td>
                                <td>{tabela.name}</td>
                                <td>{tabela.job}</td>
                                <td>{formatDate(tabela.admission_date)}</td>
                                <td>{formatPhone(tabela.phone)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    
                <div className="mob">
                   <div className="header-informacoes">
                        <div className="foto">FOTO</div>
                        <div className="nome">NOME</div>
                    </div>
                    <div className="body">
                        {tabelaFiltrada.map(tabela => (
                            <div className={`body-item ${openItems[tabela.id] ? 'open' : ''}`} key={tabela.id}>
                                <div className="img"><img src={tabela.image} alt="Imagem do funcionário"/></div>
                                <div className="informacoes">{tabela.name} 
                                    <button onClick={() => toggleOpen(tabela.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M7.5 12L16 21L24.5 12" stroke="#0500FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <ul>
                                    <li><span>Cargo</span> {tabela.job}</li>
                                    <li><span>Data de admissão</span> {formatDate(tabela.admission_date)}</li>
                                    <li><span>Telefone</span> {formatPhone(tabela.phone)}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;


import React from "react";
import "./TaskManager.css";

const TaskManager = () => {
  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <header className="app-header">
        <div className="header-logo">
            <img 
            src={process.env.PUBLIC_URL + "/images/logo.png"} 
            alt="ICMC Junior" 
            className="logo-image"
            />
        </div>
        <nav className="header-nav">
            <a href="#" className="nav-link active">HOME</a>
            <a href="#" className="nav-link">CRIAR CONTA</a>
            <a href="#" className="nav-link">ENTRAR</a>
        </nav>
        </header>

      {/* Conteúdo principal com layout melhorado */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="task-manager-content">
            <h1>Gerencie tudo com uma ferramenta de organização de tarefas.</h1>
            <p>
              Organize sua agenda e o fluxo de trabalho utilizando a ferramenta gratuita de gestão de tarefas. Tenha uma visão clara das tarefas, responsáveis e prazos de entrega, evitando esquecimentos e garantindo o progresso contínuo dos seus projetos.
            </p>
            <button className="cta-button">Cadastrar →</button>
          </div>
          
          <div className="task-manager-image">
            <img
              src={process.env.PUBLIC_URL + "/images/dashboard.png"}
              alt="Plataforma de tarefas"
              className="platform-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskManager;
import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/sucess-page.css';

function SucessPage(){
    return(
        <div id="page-landing">
      <div className="content-wrapper">
        
        <main>
          <h1>Ebaaaaa!</h1>
          <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
        </main>

        
        <Link to="/app" className="btnReturnMap">
          <strong>Voltar para o mapa</strong>
        </Link>
      </div>
    </div>
    );
}

export default SucessPage;
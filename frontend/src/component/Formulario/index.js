import React, { useState } from 'react';
import { Wrapper, Form, SubmitButton, Container, OrigemDestino, Result } from './styles';

import api from '../../api';

const Formulario = () => {
  const [resultado, setResultado] = useState([])
  const [pageResult, setPageResult] = useState(false);
  const [data, setData] = useState({
    dddOrigem: "",
    dddDestino: "",
    duracao: "",
    plano: {
      nome: "",
      franquia: ""
    },
  })

  const ddds = ["011", "016", "017", "018"];
  const planos = [
    {
      nome: "FaleMais30",
      franquia: 30
    },
    {
      nome: "FaleMais60",
      franquia: 60
    },
    {
      nome: "FaleMais120",
      franquia: 120
    }
  ];

  const handleInputChange = (event) => {
    const auxValues = {...data}
    auxValues[event.target.name] = event.target.value
    setData(auxValues)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.post('/tarifa', data)
    .then((result) => {
      const resultado =  Object.entries(result.data);
      setResultado(resultado)
    })
    setPageResult(true)
  };

  const closeResult = () => {
    setPageResult(false)
  }

  return(
    
    <Wrapper>
        <Container>
        <h1>SEJA BEM VINDO!</h1>
        <p>Consulte o preço das ligações com os planos FaleMais</p>
          <Form onSubmit={handleSubmit}>
            <OrigemDestino>
              <li>
                <label>Origem da ligação: </label>
                <select
                  onChange={handleInputChange}
                  id="dddOrigem"
                  name="dddOrigem"
                >
                  <option hidden>Selecione</option>
                  {ddds.map((ddd, index) =>
                    <option key={index}>{ddd}</option>
                  )}
                </select>
              </li>
              <li>
                <label>Destino da ligação: </label>
                <select
                  id="dddDestino"
                  name="dddDestino"
                  onChange={handleInputChange}
                >
                  <option hidden>Selecione</option>
                  {ddds.map((ddd, index) =>
                    <option key={index}>{ddd}</option>
                  )}
                </select>
              </li>
              <li>
              <label>Duração/min:</label>
              <input
                placeholder="ex: 20"
                id="duracao"
                name="duracao"
                onChange={handleInputChange}
              />
            </li>
            
            </OrigemDestino>
            <li>
                <label> Selecione o Plano: </label>
                <select id="plano" name="plano"  onChange={handleInputChange}>
                  <option hidden>Selecione</option>
                  {planos.map((plano, index) =>
                    <option key={index} value={JSON.stringify(plano)}>{plano.nome}</option>
                  )}
                </select>
              </li>
            <SubmitButton type="submit">Consultar</SubmitButton>
          </Form>
          
        </Container>
      
      {pageResult &&(
        <Result>
          <img src="/close.svg" alt="close" onClick={() => closeResult()}/>
          <div>
            <p>O valor da sua ligação <strong>com</strong> o plano <strong>FaleMais</strong>: <strong>{resultado[0][1]}</strong></p>
            <p>O valor da sua ligação sem o plano FaleMais: <strong>{resultado[1][1]}</strong></p>
          </div>
        </Result>
      )}
    </Wrapper>
    
  );
}

export default Formulario;
import React, { useState } from 'react';
import { Picker } from 'react-native';
import {
  Wrapper,
  TextLogo,
  TextInfo,
  Form,
  SpanName,
  PickerSelect,
  TextInputDDD,
  Button,
  TextButton,
  ResultView,
  CloseButton,
  TextResult,
} from './styles';

import api from '../../api';

export default function FaleMais() {
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
  });
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.post('/tarifa', data)
      .then((result) => {
        const resultado =  Object.entries(result.data);
        setResultado(resultado)
      })
      setPageResult(true)
  }
  const closeResult = () => {
    setPageResult(false)
  }
  
  return (
    
      <Wrapper>
          <TextLogo>SEJA BEM VINDO!</TextLogo>
          <TextInfo>Veja as vantagens abaixo</TextInfo>
          <Form>
            <SpanName>Origem da ligação:</SpanName>
            <PickerSelect onValueChange={(ddd) => setData({...data, dddOrigem: ddd})}>
            <Picker.Item  label={'Selecione um ddd'} value={null} />
              {ddds.map((ddd, index) =>
                <Picker.Item key={index} label={ddd}>{ddd}</Picker.Item>
              )}
            </PickerSelect>


            <SpanName>Destino da ligação:</SpanName>
            <PickerSelect onValueChange={(ddd) => setData({...data, dddDestino: ddd})}>
              <Picker.Item  label={'Selecione um ddd'} value={null} />
              {ddds.map((ddd, index) =>
                <Picker.Item key={index} label={ddd}>{ddd}</Picker.Item>
              )}
            </PickerSelect>
            


            <SpanName>Duração em min:</SpanName>
            <TextInputDDD placeholder="Ex: 20"  onChangeText={(duracao) => setData({...data, duracao: duracao})}/>


            <SpanName> Selecione um plano</SpanName>
            <PickerSelect onValueChange={(plano => setData({...data, plano: plano}))}>
              <Picker.Item  label={'Selecione um plano'} value={null} />
              {planos.map((plano, index) => 
                  <Picker.Item key={index} label={plano.nome} value={JSON.stringify(plano)}>{plano.nome}</Picker.Item>
              )}
            </PickerSelect>

            <Button onPress={handleSubmit}>
                <TextButton>Experimente agora!</TextButton>
            </Button>

          </Form>

          {pageResult &&(
            <ResultView>
              <TextResult>O valor da sua ligação com o plano FaleMais: {resultado[0][1]} </TextResult>
              <TextResult>O valor da sua ligação sem o plano FaleMais: {resultado[1][1]} </TextResult>
              <CloseButton onClick={() => closeResult()}>
                <TextButton>Voltar</TextButton>
              </CloseButton>
            </ResultView>
          )}
      </Wrapper>
  )
}
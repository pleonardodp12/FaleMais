import React from 'react';
import img from '../../images/img.svg';

import { useNavigation } from '@react-navigation/native';

import { Wrapper, Info, ListaItems, Plano, Label, Button,TextButton } from './styles';

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateToPoints (){
    navigation.navigate('FaleMais')
  }
  return (

    <Wrapper>
        <img src={img} alt="imagem"/>
        <Info>
          <ListaItems>
            <Plano>FaleMais30</Plano>
            <Label>Com o plano FaleMais30 você terá 30 minutos gratuitos de ligação.</Label>
            <Plano>FaleMais60</Plano>
            <Label>Com o plano FaleMais60 você terá 60 minutos gratuitos de ligação.</Label>
            <Plano>FaleMais120</Plano>
            <Label>Com o plano FaleMais120 você terá 120 minutos gratuitos de ligação.</Label>
          </ListaItems>
        </Info>
        <Button onPress={handleNavigateToPoints}>
            <TextButton>Experimente agora!</TextButton>
        </Button>
    </Wrapper>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { BorderInfo, Info, BoxMenu, Button, ListaItems, Plano} from './styles';

const Home = () => {
  return (
    <BoxMenu>
      <div>
        <img src="/img.svg" alt="imagem" width="400"/>
      </div>
      
      <Info>
        <BorderInfo>
          <ListaItems>
            <Plano>FaleMais30</Plano>
            <label>Com o plano FaleMais30 você terá 30 minutos gratuitos de ligação.</label>
            <Plano>FaleMais60</Plano>
            <label>Com o plano FaleMais60 você terá 60 minutos gratuitos de ligação.</label>
            <Plano>FaleMais120</Plano>
            <label>Com o plano FaleMais120 você terá 120 minutos gratuitos de ligação.</label>
          </ListaItems>
        </BorderInfo>
        <Link to="/fale-mais"><Button>Experimente isso Agora!</Button></Link>
      </Info>
    </BoxMenu>
  );
}
export default Home;
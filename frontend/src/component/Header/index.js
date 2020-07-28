import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from '../../pages/Home';
import FaleMais from '../../pages/FaleMais';

import { HeaderNav, Items, Nav, StyledLink } from './styles';

const Header = () =>{
  return (
    <BrowserRouter>
      <div>
        <HeaderNav>
          <Link to="/home"><img src={"/logo.png"} alt="log" /></Link>
          <Nav>
            <Items><StyledLink to="/home"> Home</StyledLink></Items>
            <Items><StyledLink to="/fale-mais"> FaleMais</StyledLink></Items>
          </Nav>
        </HeaderNav>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home"> <Home /> </Route>
          <Route path="/fale-mais"> <FaleMais /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Header;
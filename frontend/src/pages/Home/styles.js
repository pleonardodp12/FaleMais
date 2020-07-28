import styled from 'styled-components';

export const BoxMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

`

export const BorderInfo = styled.div`
  width: 350px;
  height: 300px;
  border: 4px solid #7E57C2;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  padding: 15px;
  margin: 0 50px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform .2s;
    &:hover {
      transform: scale(1.1)
    }
`
export const Button = styled.button`
  width: 300px;
  height: 60px;
  color: #fff;
  margin: 30px 0px;
  font-weight:bold;
  font-size: 18px;
  background: #7E57C2;
  border-radius: 8px;
  transition: 0.5s;
  border: none;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  &:hover {
    background: #512996;
  }
  
`

export const ListaItems = styled.ul`
  display: flex;
  flex-direction: column;
  label {
    line-height: 28px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 15px;
    
  }
`

export const Plano = styled.li`
  color: #7E57C2;
  display: flex;
  font-size: 20px;
  align-items: center;
  
`

export const Label = styled.label`
  
`


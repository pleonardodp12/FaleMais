import styled from 'styled-components';



export const OrigemDestino = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  h1 {
    margin-top: 15px;
    font-weight: bold;
    color: #512996;
  }
  p {
    margin: 15px 0;
    font-size: 18px;
    color: #7E57C2;
    
  }
`;

export const Container = styled.div`
  background: #fff;
  width: 600px;
  border-radius: 8px;
  padding: 30px 0px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;

  input,
  select {
    height: 40px;
    width: 100%;
    border: none;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #7E57C2;
    border-radius: 8px;
    text-indent: 10px;
    :hover, :focus {
      background-color: #D8CDED;
    }
  }
  label {
    display: flex;
    margin: 3% 0;
  }
`



export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`

  display: block;
  min-width: 120px;
  border: none;
  font-weight:bold;
  font-size: 16px;
  background: #7E57C2;
  color: #fff;
  border-radius: 8px;
  transition: 0.5s;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  &:hover {
    background: #512996;
  }
  margin: 5%;
  padding: 8px;
`;


export const Result = styled.div`
  background: #fefefe;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 50px;
  border: #512996 solid 3px;
  border-radius: 25px;
  transform: translate(-50%, -50%);
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  opacity: 0.9;
  p {
    color: #7E57C2;
  }
  strong {
    color:#512996;
  }
  img {
    width: 35px;
    position: absolute;
    right:10px;
    top: 15px;
    z-index: 1000;
    cursor: pointer;
  }
`;
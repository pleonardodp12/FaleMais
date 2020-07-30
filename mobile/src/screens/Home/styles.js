import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #7E57C2;
  flex: 1;
  padding: 32px;
  padding-top: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.View`
  align-items: center;
  flex-direction: column;
  padding: 0 25px;
  margin: auto;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 320px;
  height: 400px;
  background-color: #F6F1FF;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 0px 0px 30px #512996;
`;

export const ListaItems = styled.View`
  flex-direction: column;
  margin-top: 25px;
`;
export const Plano = styled.Text`
  color: #7E57C2;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
`;
export const Label = styled.Text`
  line-height: 26px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: #000000;
  margin-bottom: 15px;
`;

export const Button = styled(TouchableOpacity)`
  width: 300px;
  height: 60px;
  border: solid #fff 1px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background: #7E57C2;
  box-shadow: 0px 0px 30px #512996;
  
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
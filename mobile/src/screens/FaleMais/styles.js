import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #7E57C2;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TextLogo = styled.Text`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  margin: 20px 0;
`;

export const TextInfo = styled.Text`
  color: #512996;
  background: #fff;
  width: 100%;
  padding: 20px 40px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  background: #fefefe;
`;

export const SpanName = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const PickerSelect = styled.Picker`
  border-radius: 8px;
  padding: 10px 20px;
  background: #fff;

`;

export const TextInputDDD = styled.TextInput`
  border-radius: 8px;
  padding: 10px 20px;
  background: #fff;
`;

export const Button = styled(TouchableOpacity)`
  width: 300px;
  height: 60px;
  border: solid #fff 1px;
  border-radius: 25px;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  background: #7E57C2;
  box-shadow: 0px 0px 30px #512996;
  
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ResultView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 0 25px;
  margin: auto;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 250px;
  height: 300px;
  border-radius: 25px;
  box-shadow: 0px 0px 30px #512996;

`;


export const CloseButton =styled(TouchableOpacity)`
  width: 200px;
  height: 40px;
  border-radius: 25px;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  background: #7E57C2;
  box-shadow: 0px 0px 10px #512996;
`;

export const TextResult = styled.Text`
  font-size: 20px;
  color: #512996;
  margin: 10px;
`;
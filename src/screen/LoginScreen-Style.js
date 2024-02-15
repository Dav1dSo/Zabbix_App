import styled from 'styled-components/native';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Image } from 'react-native';


export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #0C2D57;
`;

export const IconContainer = styled(View)`
    margin-bottom: 30px;
`;

export const Icon = styled(Image)`
  width: 100px;  
  height: 100px;  
`;

export const StyledInput = styled(TextInput)`
  height: 50px;
  width: 100%;
  background-color: #EFECEC;
  border-radius: 10px;
  padding-horizontal: 15px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(TouchableOpacity)`
  background-color: #FC6736;
  padding-vertical: 10px;
  padding-horizontal: 35px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const SubmitButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

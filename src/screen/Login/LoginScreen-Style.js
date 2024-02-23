import styled from 'styled-components/native';
import { View, TextInput, TouchableOpacity, Text, Image} from 'react-native';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #0C2D57;
`;

const IconContainer = styled(View)`
  margin-bottom: 30px;
`;

const Icon = styled(Image)`
  width: 100px;  
  height: 100px;  
`;

const StyledInput = styled(TextInput)`
  height: 50px;
  width: 100%;
  background-color: #EFECEC;
  border-radius: 10px;
  padding-horizontal: 15px;
  margin-bottom: 15px;
`;

const SubmitButton = styled(TouchableOpacity)`
  background-color: #FC6736;
  padding-vertical: 10px;
  padding-horizontal: 35px;
  border-radius: 10px;
  margin-top: 20px;
`;

const CheckboxContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding: 5px;
`;

const Checkbox = styled.Switch``;

const CheckboxLabel = styled(Text)`
  color: white;
  font-size: 15px;
`;

const ForgotPasswordLink = styled(TouchableOpacity)`
  margin-top: 30px;
`;

const ForgotPasswordText = styled(Text)`
  color: white;
  font-size: 14px;
`;

const SubmitButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export { 
  Container, 
  IconContainer, 
  Icon, 
  StyledInput, 
  SubmitButton,
  CheckboxContainer, 
  Checkbox, 
  CheckboxLabel, 
  ForgotPasswordLink,
  ForgotPasswordText,
  SubmitButtonText 
};

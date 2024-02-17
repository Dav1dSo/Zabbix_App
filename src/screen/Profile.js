import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styled from 'styled-components/native';

// Styled components
const SuccessContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0C2D57; /* Mantém a cor de fundo */
`;

const ProfileButton = styled(TouchableOpacity)`
  background-color: #FC6736;
  padding: 10px 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

const ProfileIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

// Componente de sucesso
const Profile = ({ onPressProfile }) => {
  return (
    <SuccessContainer>
      <ProfileButton onPress={onPressProfile}>
        <ProfileIcon source={require('../../assets/profile_icon.png')} />
        <ButtonText>Perfil</ButtonText>
      </ProfileButton>
    </SuccessContainer>
  );
};

export default Profile;

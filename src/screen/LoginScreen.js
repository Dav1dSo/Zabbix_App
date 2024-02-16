import React, { useState } from 'react';
import {
    Checkbox, CheckboxContainer, CheckboxLabel, Container, Icon,
    IconContainer, StyledInput, SubmitButton, SubmitButtonText,
    ForgotPasswordLink, ForgotPasswordText
} from './LoginScreen-Style';
import LoginCreateSession from '../services/ServiceLogin';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saveCredentials, setSaveCredentials] = useState(false);

    const handleLogin = async () => {

        await LoginCreateSession({ username, password, saveCredentials }); 
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Save credentials:", saveCredentials);
    }; 

    const handleForgotPassword = () => {
        // Implementar lógica para redirecionar para a tela de redefinição de senha.
        console.log("Esqueci minha senha");
    };

    return (
        <Container>
            <IconContainer>
                <Icon source={require('../../assets/icon-login.png')} />
            </IconContainer>
            <StyledInput
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
            />
            <StyledInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <CheckboxContainer>
                <Checkbox value={saveCredentials} onValueChange={setSaveCredentials} />
                <CheckboxLabel>Salvar credenciais</CheckboxLabel>
            </CheckboxContainer> 
 
            <ForgotPasswordLink onPress={handleForgotPassword}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordLink>

            <SubmitButton onPress={handleLogin}>
                <SubmitButtonText>Login</SubmitButtonText>
            </SubmitButton>
        </Container>
    );
};

export default LoginScreen;

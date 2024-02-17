import React, { useState } from 'react';
import {
    Checkbox, CheckboxContainer, CheckboxLabel, Container, Icon,
    IconContainer, StyledInput, SubmitButton, SubmitButtonText,
    ForgotPasswordLink, ForgotPasswordText
} from './LoginScreen-Style';
import { useNavigation } from '@react-navigation/native';
import LoginCreateSession from '../services/ServiceLogin';
import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SucessMessage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saveCredentials, setSaveCredentials] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        setError(null);
        try {
            await LoginCreateSession({ username, password, saveCredentials }); 
            setSuccessMessage('Login successful!');
            setUsername('');
            setPassword('');
            navigation.navigate('Home');
        } catch (error) {
            setError('Incorrect user name or password or account is temporarily blocked.');
        }
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
             {error && <ErrorMessage message={error} />}
             {successMessage && <SuccessMessage message={successMessage} />}
            <IconContainer>
                <Icon source={require('../../assets/icon-login.png')} />
            </IconContainer>
            <StyledInput
                placeholder="Username:"
                onChangeText={setUsername}
                value={username}
            />
            <StyledInput
                placeholder="Password:"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <CheckboxContainer>
                <Checkbox value={saveCredentials} onValueChange={setSaveCredentials} />
                <CheckboxLabel> Salvar Login </CheckboxLabel>
            </CheckboxContainer> 
 

            <SubmitButton onPress={handleLogin}>
                <SubmitButtonText>Login</SubmitButtonText>
            </SubmitButton>

            <ForgotPasswordLink onPress={handleForgotPassword}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordLink>
        </Container>
    );
};

export default LoginScreen;

import React, { useState } from 'react';
import { Container, Icon, IconContainer, StyledInput, SubmitButton, SubmitButtonText } from './LoginScreen-Style';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
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
            <SubmitButton onPress={handleLogin}>
                <SubmitButtonText>Login</SubmitButtonText>
            </SubmitButton>
        </Container>
    );
};

export default LoginScreen;

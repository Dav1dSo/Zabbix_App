import axios from 'axios';

const apiUrl = 'http://192.168.1.10/api_jsonrpc.php';

const LoginCreateSession = async (data) => {
    try {
        const response = await axios.post(apiUrl, {
            jsonrpc: '2.0',
            method: 'user.login',
            params: {
                username: data.username,  
                password: data.password  
            },
            id: 1
        });

        console.log('Resposta da API (Login):', response.data);

        if (data.saveCredentials === true) {
            const secondResponse = await axios.post(apiUrl, {
                jsonrpc: "2.0",
                method: "user.checkAuthentication",
                params: {
                    sessionid: response.data.result  
                },
                id: 2
            });

            console.log('Resposta da API (Check Authentication):', secondResponse.data);
        }
    } catch (error) {
        console.error('Erro ao fazer solicitação para a API:', error);
    }
}

export default LoginCreateSession;

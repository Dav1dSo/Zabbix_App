import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = 'http://192.168.1.10/api_jsonrpc.php';

const GetUsers = async () => {
    try {
        const response = await axios.post(apiUrl, {
            jsonrpc: '2.0',
            method: 'user.get',
            params: {
                output: 'extend',
            },
            auth: await AsyncStorage.getItem('authToken'),
            id: 1,
        });
        return response;
    } catch (error) {
        console.error('Erro ao fazer solicitação para a API:', error);
        throw error;
    }
}

export default GetUsers;
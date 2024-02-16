import AsyncStorage from '@react-native-async-storage/async-storage';


const getAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        return token;
    } catch (error) {
        console.error('Erro ao obter o token de autenticação:', error);
        return null;
    }
};

export default getAuthToken;
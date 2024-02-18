import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  
import GetUsers from '../services/ServiceGetUsers';

const HomeScreen = () => {
    const [userData, setUserData] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const response = await GetUsers();
            const users = response.data.result;
            console.log(users);
            if (users.length > 0) {
                setUserData(users);
            }
        } catch (error) {
            console.error('Erro ao obter informações do usuário:', error);
        }
    };

    const cardsData = [
        { id: 1, title: 'Users', iconName: 'user' },
        { id: 2, title: 'Network', iconName: 'wifi' },
        { id: 3, title: 'Card 3', iconName: 'phone' },
        { id: 4, title: 'Card 4', iconName: 'car' },
        { id: 5, title: 'Card 5', iconName: 'apple' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
            <View style={styles.iconContainer}>
                <Icon name={item.iconName} size={30} color="#900" />    
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    const handleCardPress = async (item) => {
        if (item.title === 'Users') {
            await fetchUserInfo();
        }
    };

    const renderUserData = () => {
        if (!userData) {
            return null;
        }

        return (
            <FlatList
                data={userData}
                renderItem={renderUserCard}
                keyExtractor={user => user.username}  
            />
        );
    };

    const renderUserCard = ({ item }) => (
        <View style={styles.userCard}>
            <Text style={styles.userText}>Username: {item.username}</Text>
            <Text style={styles.userText}>Name: {item.name}</Text>
            <Text style={styles.userText}>Surname: {item.surname}</Text>
            <Text style={styles.userText}>Autologin: {item.autologin}</Text>
            <Text style={styles.userText}>
                Autologout: <Text style={{ color: item.autologout === "1" ? 'green' : 'red' }}>{item.autologout === "1" ? "true" : "false"}</Text>
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cardsData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={5}
                contentContainerStyle={styles.flatListContainer}
            />
            {renderUserData()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    iconContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userCard: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#9c3a3a', 
    },
    userText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default HomeScreen;

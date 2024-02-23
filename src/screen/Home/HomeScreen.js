import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  
import GetUsers from '../../services/ServiceGetUsers';
import {
    Container,
    FlatListContainer,
    Card,
    IconContainer,
    Title,
    UserCard,
    UserText
} from './HomeScreen-Style'

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

    const handleCardPress = async (item) => {
        if (item.title === 'Users') {
            await fetchUserInfo();
        }
    };

    const renderUserCard = ({ item }) => (
        <UserCard> 
            <UserText>Username: {item.username}</UserText>
            <UserText>Name: {item.name}</UserText>
            <UserText>Surname: {item.surname}</UserText>
            <UserText>Autologin: {item.autologin}</UserText>
            <UserText>
                Autologout: <Text style={{ color: item.autologout === "1" ? 'green' : 'red' }}>{item.autologout === "1" ? "true" : "false"}</Text>
            </UserText>
        </UserCard>
    );

    return (
        <Container>
            <FlatList
                data={cardsData}
                renderItem={({ item }) => (
                    <Card onPress={() => handleCardPress(item)}>
                        <IconContainer>
                            <Icon name={item.iconName} size={30} color="#900" />    
                        </IconContainer>
                        <Title>{item.title}</Title>
                    </Card>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={5}
                contentContainerStyle={FlatListContainer}
            />
            {userData && (
                <FlatList
                    data={userData}
                    renderItem={renderUserCard}
                    keyExtractor={user => user.username}  
                />
            )}
        </Container>
    );
};

export default HomeScreen;

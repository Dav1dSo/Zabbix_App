import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const FlatListContainer = styled.View`
    padding-horizontal: 10px;
    padding-top: 10px;
`;

export const Card = styled.TouchableOpacity`
    flex: 1;
    margin: 5px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #ccc;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const IconContainer = styled.View`
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const UserCard = styled.View`
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #9c3a3a;
`;

export const UserText = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
`;

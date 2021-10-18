import axios from 'axios';

export const startGame = async () => {
    const response = (await axios.get("http://localhost:3000/")).data
    
    return response;
};

export const playTurn = async () => {
    const response = (await axios.get("http://localhost:3000/playTurn")).data

    return response;
}


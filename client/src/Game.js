import axios from 'axios';

const startGame = async () => {
    const response = (await axios.get("http://localhost:3000/")).data
    
    return response;
};

export default startGame;

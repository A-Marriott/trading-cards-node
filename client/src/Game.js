import axios from 'axios';

const startGame = async () => {
    console.log("Should not see this")
    const response = (await axios.get("http://localhost:3000/")).data
    
    return response;
};

export default startGame;

import axios from 'axios';

export const startGame = async () => {
    const response = (await axios.get("http://localhost:3000/")).data
    
    return response;
};

export const playCard = async (cardIndex) => {
    // const response = (await axios.get(`http://localhost:3000/playcard/${cardIndex}`))
    const response = await axios.get(`http://localhost:3000/playcard/${cardIndex}`)
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        // .catch(function (error) {
        //     console.log(error.toJSON());
        // });
    // console.log('response.data')
};

export const switchPlayer = async () => {
    const response = (await axios.get("http://localhost:3000/changeplayer")).data

    return response;
};

export const restartGame = async () => {
    const response = (await axios.get("http://localhost:3000/restartgame")).data
    
    return response;
};

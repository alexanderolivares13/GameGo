const actionHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/action');
};

const sportsHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/sports');
};

const rpgHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/rpg');
};

const horrorHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/horror');
};

document.querySelector('#action-btn').addEventListener('button', actionHandler);
document.querySelector('#sports-btn').addEventListener('button', sportsHandler);
document.querySelector('#rpg-btn').addEventListener('button', rpgHandler);
document.querySelector('#horror-btn').addEventListener('button', horrorHandler);
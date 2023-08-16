const actionBtn = document.getElementById('action-btn');

const actionHandler = async (event) => {
    console.log("hi");
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

actionBtn.addEventListener('click', actionHandler);
document.querySelector('#sports-btn').addEventListener('button', sportsHandler);
document.querySelector('#rpg-btn').addEventListener('button', rpgHandler);
document.querySelector('#horror-btn').addEventListener('button', horrorHandler);
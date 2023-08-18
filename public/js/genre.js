const actionBtn = document.getElementById('action-btn');
const sportsBtn = document.getElementById('sports-btn');
const rpgBtn = document.getElementById('rpg-btn');
const horrorBtn = document.getElementById('horror-btn');

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

actionBtn.addEventListener('click', actionHandler);
sportsBtn.addEventListener('click', sportsHandler);
rpgBtn.addEventListener('click', rpgHandler);
horrorBtn.addEventListener('click', horrorHandler);
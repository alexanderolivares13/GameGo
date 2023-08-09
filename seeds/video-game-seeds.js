const { VideoGame } = require("../models");

const videoGameData = [
  {
    title: "God of War Ragnarok",
    price: 49.99,
    genre_id: 1,
    stock: 50,
    release_date: "Nov. 9, 2022",
    developers: "SIE Santa Monica Studio",
    boxart_url:
      "https://cdn.mobygames.com/66bb26ec-ac16-11ed-9271-02420a000133.webp",
    console_ps5: true,
    console_xbox: false,
    console_pc: true,
  },
  {
    title: "Star Wars Jedi: Survivor",
    price: 69.99,
    genre_id: 1,
    stock: 50,
    release_date: "Apr. 28, 2023",
    developers: "Respawn Entertainment",
    boxart_url:
      "https://cdn.mobygames.com/05fd7d96-e5b4-11ed-b425-02420a000158.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Street Fighter 6",
    price: 59.99,
    genre_id: 1,
    stock: 50,
    release_date: "Jun 2, 2023",
    developers: "Capcom",
    boxart_url:
      "https://cdn.mobygames.com/15eb2c8c-009c-11ee-8cd9-02420a000113.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Marvel's Spider-Man: Miles Morales",
    price: 49.99,
    genre_id: 1,
    stock: 50,
    release_date: "Nov. 12, 2020",
    developers: "Insomniac Games",
    boxart_url:
      "https://cdn.mobygames.com/1cfae498-ac16-11ed-bc39-02420a000131.webp",
    console_ps5: true,
    console_xbox: false,
    console_pc: true,
  },
  {
    title: "It Takes Two",
    price: 39.99,
    genre_id: 1,
    stock: 50,
    release_date: "Nov. 12, 2020",
    developers: "Electronic Arts",
    boxart_url:
      "https://cdn.mobygames.com/1cfae498-ac16-11ed-bc39-02420a000131.webp",
    console_ps5: true,
    console_xbox: false,
    console_pc: true,
  },
];

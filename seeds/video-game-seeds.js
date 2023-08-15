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
    release_date: "Mar. 25, 2021",
    developers: "Hazelight Studios AB",
    boxart_url:
      "https://cdn.mobygames.com/covers/5918747-it-takes-two-windows-front-cover.jpg",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "FIFA 23",
    price: 39.99,
    genre_id: 2,
    stock: 50,
    release_date: "Sep. 30, 2022",
    developers: "Electronic Arts Vancouver",
    boxart_url:
      "https://cdn.mobygames.com/a019ebe4-ac16-11ed-83c1-02420a000131.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Madden NFL 23",
    price: 59.99,
    genre_id: 2,
    stock: 50,
    release_date: "Aug. 19, 2022",
    developers: "EA Tiburon",
    boxart_url:
      "https://cdn.mobygames.com/covers/10750001-madden-nfl-23-xbox-one-front-cover.jpg",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "WWE 2K22",
    price: 49.99,
    genre_id: 2,
    stock: 50,
    release_date: "Mar. 10, 2022",
    developers: "Visual Concepts Entertainment, Inc.",
    boxart_url:
      "https://cdn.mobygames.com/covers/11330714-wwe-2k22-xbox-series-front-cover.jpg",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Riders Republic",
    price: 59.99,
    genre_id: 2,
    stock: 50,
    release_date: "Oct. 28, 2021",
    developers: "Ubisoft Annecy SAS",
    boxart_url:
      "https://cdn.mobygames.com/c4f9058e-ac0d-11ed-b57a-02420a000130.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Cursed to Golf",
    price: 19.99,
    genre_id: 2,
    stock: 50,
    release_date: "Aug. 18, 2022",
    developers: "Chuhai Labs",
    boxart_url:
      "https://cdn.mobygames.com/covers/11032908-cursed-to-golf-xbox-one-front-cover.jpg",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Elden Ring",
    price: 59.99,
    genre_id: 3,
    stock: 50,
    release_date: "Feb. 25, 2022",
    developers: "FromSoftware, Inc.",
    boxart_url:
      "https://cdn.mobygames.com/9a736412-ac12-11ed-b013-02420a00012e.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Final Fantasy XVI",
    price: 69.99,
    genre_id: 3,
    stock: 50,
    release_date: "Jun. 21, 2023",
    developers: "Square Enix Creative Business Unit III",
    boxart_url:
      "https://cdn.mobygames.com/97a23b6c-10ff-11ee-9868-02420a000144.webp",
    console_ps5: true,
    console_xbox: false,
    console_pc: false,
  },
  {
    title: "Hogwarts Legacy",
    price: 59.99,
    genre_id: 3,
    stock: 50,
    release_date: "Feb. 10, 2023",
    developers: "WB Games | Avalanche",
    boxart_url:
      "https://cdn.mobygames.com/4a6d7de0-b554-11ed-90d5-02420a000138.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Assassin's Creed: Valhalla",
    price: 59.99,
    genre_id: 3,
    stock: 50,
    release_date: "Nov. 9, 2020",
    developers: "Ubisoft Entertainment Inc.",
    boxart_url:
      "https://cdn.mobygames.com/dbd9c170-ac09-11ed-b950-02420a00012d.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: false,
  },
  {
    title: "Diablo IV",
    price: 69.99,
    genre_id: 3,
    stock: 50,
    release_date: "Jun. 6, 2023",
    developers: "Blizzard Entertainment Inc.",
    boxart_url:
      "https://cdn.mobygames.com/3fce00ba-0452-11ee-9cf3-02420a000120.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Resident Evil 4",
    price: 59.99,
    genre_id: 4,
    stock: 50,
    release_date: "Mar. 24, 2023",
    developers: "Capcom Co., Ltd.",
    boxart_url:
      "https://cdn.mobygames.com/9cdba536-cdda-11ed-bf56-02420a0001cc.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "The Quarry",
    price: 49.99,
    genre_id: 4,
    stock: 50,
    release_date: "Jun. 10, 2022",
    developers: "Supermassive Games Ltd.",
    boxart_url:
      "https://cdn.mobygames.com/covers/10802395-the-quarry-playstation-5-front-cover.jpg",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "The Callisto Protocol",
    price: 59.99,
    genre_id: 4,
    stock: 50,
    release_date: "Dec. 1, 2022",
    developers: "Striking Distance Studios, Inc.",
    boxart_url: "https://i.ebayimg.com/images/g/4fEAAOSwnO1j-Mk5/s-l1600.jpg",
    console_ps5: true,
    console_xbox: false,
    console_pc: true,
  },
  {
    title: "Dead Space",
    price: 69.99,
    genre_id: 4,
    stock: 50,
    release_date: "Jan. 27, 2023",
    developers: "Motive Studios",
    boxart_url:
      "https://cdn.mobygames.com/5335abd2-ac17-11ed-80b1-02420a000133.webp",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
  {
    title: "Evil Dead: The Game",
    price: 39.99,
    genre_id: 4,
    stock: 50,
    release_date: "May 13, 2022",
    developers: "Saber Interactive Spain S.L.",
    boxart_url:
      "https://cdn.mobygames.com/covers/10661029-evil-dead-the-game-xbox-one-front-cover.jpg",
    console_ps5: true,
    console_xbox: true,
    console_pc: true,
  },
];

const seedVideoGame = () => VideoGame.bulkCreate(videoGameData);

module.exports = seedVideoGame;

const cartBtn = document.querySelector("#shopping-cart");
const addCart = document.querySelector("#add-cart");
const gameInfoEl = document.querySelector(".game-info");

const addToCartHandler = () => {
  fetch(`/api/videogames/add-cart/${gameInfoEl.id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(
        ecomCart.addProduct({
          _id: `${data.id}`,
          name: data.title,
          price: data.price,
          quantity: 1,
          boxart_url: data.boxart_url,
        })
      );
    });
};

ecomCart.on("change", ({ data }) => {
  console.log("Current cart data:", data);
});
cartBtn.addEventListener("click", () => {
  window.location.replace("/cart");
  console.log("click");
});

if (window.location.href.includes("/game")) {
  addCart.addEventListener("click", addToCartHandler);
}

if (window.location.href.includes("cart")) {
  const gameUlEl = document.querySelector(".cart-game-list");
  let cartData = JSON.parse(localStorage.getItem("ecomShoppingCart"));
  for (let item of cartData.items) {
    let newLine = document.createElement("li");
    let imgChild = document.createElement("img");
    let gameTitle = document.createElement("h2");
    let gamePrice = document.createElement('h2');
    newLine.setAttribute("class", "game-li list-group-item");
    imgChild.setAttribute("src", `${item.boxart_url}`);
    imgChild.setAttribute("class", "list-img");

    gameTitle.textContent = item.name;
    gamePrice.textContent = `Price: $ ${item.price}`

    newLine.append(imgChild);
    newLine.append(gameTitle);
    newLine.append(gamePrice)
    gameUlEl.append(newLine);

    console.log(item);
    console.log(newLine);
  }
}

const cartBtn = document.querySelector("#shopping-cart");
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
  const addCart = document.querySelector("#add-cart");
  addCart.addEventListener("click", addToCartHandler);
}

if (window.location.href.includes("cart")) {
  const gameUlEl = document.querySelector(".cart-game-list");
  let cartData = JSON.parse(localStorage.getItem("ecomShoppingCart"));
  for (let item of cartData.items) {
    let newLine = document.createElement("li");
    let removeBtn = document.createElement("button");
    let link = document.createElement("a");
    let imgChild = document.createElement("img");
    let gameTitle = document.createElement("h2");
    let gamePrice = document.createElement("h2");
    newLine.setAttribute("class", "game-li list-group-item");
    newLine.setAttribute("id", `${item._id}`);
    link.setAttribute("href", `/game/${item.product_id}`);
    imgChild.setAttribute("src", `${item.boxart_url}`);
    imgChild.setAttribute("class", "list-img");
    removeBtn.setAttribute("class", "btn btn-danger remove-btn");

    gameTitle.textContent = item.name;
    gamePrice.textContent = `Price: $ ${item.price}`;

    removeBtn.append("Remove");
    newLine.append(link);
    link.append(imgChild);
    newLine.append(gameTitle);
    newLine.append(gamePrice);
    newLine.append(removeBtn);
    gameUlEl.append(newLine);
  }
  let newLine = document.createElement("li");
  let newHeader = document.createElement("h2");
  let checkoutBtn = document.createElement("button");
  newLine.setAttribute("class", "list-subtotal");
  newHeader.textContent = `Subtotal: $${cartData.subtotal}`;
  checkoutBtn.setAttribute("class", "btn btn-success checkout-btn");
  checkoutBtn.append("Checkout");
  newLine.append(newHeader);
  newLine.append(checkoutBtn);
  gameUlEl.append(newLine);

  gameUlEl.addEventListener("click", (event) => {
    if (event.target.innerHTML === "Remove") {
      ecomCart.removeItem(event.target.parentNode.id);
      window.location.reload();
    } else if (event.target.innerHTML === "Checkout") {
      console.log("click checkout");
    }
  });
}

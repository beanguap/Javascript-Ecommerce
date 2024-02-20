let basket = JSON.parse(localStorage.getItem("basketData")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket
    .map((basketItem) => parseInt(basketItem.item))
    .reduce((x, y) => x + y, 0);

};

calculation();
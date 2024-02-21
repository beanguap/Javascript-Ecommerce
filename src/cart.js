let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')

// Retrieve data from localStorage or initialize an empty array
let basket = JSON.parse(localStorage.getItem("basketData")) || [];


// Function to update the cart icon with the total number of items
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket
    .map((basketItem) => parseInt(basketItem.item))
    .reduce((x, y) => x + y, 0);

};

calculation();

// Function to generate cart items in the shopping cart
let generateCartItems = () => {
    console.log(shopItemsData);
    console.log("Item IDs:", shopItemsData.map(item => item.id));
console.log("Item Images:", shopItemsData.map(item => item.img));

    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket.map((itemTarget)=> {
            let {id, item} = itemTarget;
            let search = shopItemsData.find((findData)=> findData.id === id) || [];
            return `
            <div class="cart-item">
                <img class="cart-img" width="100" src=${search.img} alt="" />
                <div class="details">

                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.name}</p>
                            <p class="cart-item-price">$ ${search.price}</p>
                        </h4>
                        <i class="bi bi-x-lg"></i>
                    </div>

                    <div class="shop-item-details">
                        <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                    </div>

                    <h3></h3>
                </div>
            </div>
            `;
        })
        .join(""));
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="store.html">
            <button class="HomeBtn">Back to Store</button>
        </a>
        `;
        
    }
};

generateCartItems();

let increment = (id) => {
    let search = basket.find((basketItem) => basketItem.id === id);

    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    localStorage.setItem("basketData", JSON.stringify(basket));
    update(id);
};

let decrement = (id) => {
    let search = basket.find((basketItem) => basketItem.id === id);
    
    if (search.item === 0) return
    else if (search === undefined || search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    update(id);

    basket = basket.filter((basketFilter)=> basketFilter.item !== 0);
    generateCartItems();
    localStorage.setItem("basketData", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((basketItem)=> basketItem.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation()
};
let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "item-one",
    name: "meow-mix",
    price: 12.99,
    desc: "Support your cat's need to maintain a healthy weight with Purina ONE Ideal Weight High Protein Natural With Added Vitamins, Minerals and Nutrients dry cat food. (...)",
    img: "src/imgs/cat-food/cat-food-2.png"
}, 
{
    id: "item-two",
    name: "purina-mix",
    price: 10.99,
    desc: "Support your cat's need to maintain a healthy weight with Purina ONE Ideal Weight High Protein Natural With Added Vitamins, Minerals and Nutrients dry cat food. (...)",
    img: "src/imgs/cat-food/cat-food.png"
}, 
{
    id: "item-three",
    name: "friskies-mix",
    price: 15.99,
    desc: "Support your cat's need to maintain a healthy weight with Purina ONE Ideal Weight High Protein Natural With Added Vitamins, Minerals and Nutrients dry cat food. (...)",
    img: "src/imgs/cat-food/cat-food-3.png"
},
{
    id: "item-four",
    name: "iams-mix",
    price: 17.99,
    desc: "Support your cat's need to maintain a healthy weight with Purina ONE Ideal Weight High Protein Natural With Added Vitamins, Minerals and Nutrients dry cat food. (...)",
    img: "src/imgs/cat-food/cat-food-4.png"
}, 
{
    id: "item-five",
    name: "catchow-mix",
    price: 5.99,
    desc: "Support your cat's need to maintain a healthy weight with Purina ONE Ideal Weight High Protein Natural With Added Vitamins, Minerals and Nutrients dry cat food. (...)",
    img: "src/imgs/cat-food/cat-food-5.png"
}]

let basket = [{
    id: "",
    item: 1
}]

let generateShop = () => {
    
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let { id, name, price, desc, img } = x;
        return  `
        <div id=product-id-${id} class="shop-item">
            <span class="shop-item-title">${name}</span>
            <img src="${img}" height="470" alt="cat-food" class="shop-item-image">
                <div class="shop-item-review">
                    <div class="stars">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <p class="item-description">${desc}</p>
                </div>
                    <span class="shop-item-price">${price}</span>
                    <div class="shop-item-details">
                        <button onclick="increment(${id})" id=${id} class="shop-item-button" type="button">ADD TO CART
                        </button>
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
        </div>`
    }).join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    console.log(increment);
};
let decrement = () => {};
let update = () => {};
let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("basketData")) || [];

let generateShop = () => {
    
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let { id, name, price, desc, img } = x;
        let search = basket.find((x)=>x.id === id) || [];
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
                        <button class="shop-item-button" type="button">ADD TO CART
                        </button>
                    <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined? 0: search.item}
                    </div>
                    <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                </div>
        </div>`
    }).join(""));
};

generateShop();

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

    localStorage.setItem("basketData", JSON.stringify(basket));
};


let update = (id) => {
    let search = basket.find((basketItem)=> basketItem.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation()
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket
    .map((basketItem) => parseInt(basketItem.item))
    .reduce((x, y) => x + y, 0);

};

calculation();
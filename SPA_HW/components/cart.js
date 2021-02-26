import localStorageProducts from "../localStorage.js";
import data from './api.js'
import { Catalog } from "./catalog.js";

export default function(products) {

    const productStore = localStorageProducts.getProducts();
    console.log(productStore)
    const inCartCount = localStorageProducts.getProducts().length
    console.log(inCartCount)

    console.log(products)

    const app = document.querySelector('.app');
    document.querySelector('main') ? document.querySelector('main').remove() : null;
    const cart = document.createElement('main');
    cart.insertAdjacentHTML('beforeend', `
                <div class="cart_main">
                    <h2>${inCartCount} items selected</h2>
                </div>
                <button class="btn_remove_cart">Remove all</button>
            `);
        const cartItem = document.createElement('div')
        cartItem.classList.add('cartItemsAll')
        // debugger
    
    products.forEach(({id, title, image, price}) => {
        productStore.forEach(item =>{
            // debugger
            if (item.id == id){
                cartItem.insertAdjacentHTML('beforeend', `
                    <div class="cart_item">
                    <p class="title_cart_item">${title}</p>
                    <img class="img_cart_item" width=100px src="${image}" alt="#">
                    <h4 class="price_cart_item">${price} USD</h4>
                    </div>
                `); 
            };

            cart.appendChild(cartItem)
            app.insertBefore(cart, document.querySelector('footer'));
        });

    });  

    const pr = document.querySelectorAll('h4')
    console.log(pr)

    let  sum = 0
    pr.forEach(element =>{
        sum += parseFloat(element.innerHTML)
        //console.log(sum)
    });

    console.log(sum)
    const sumHtml = document.createElement('div')
    sumHtml.insertAdjacentHTML('beforeend', `
        <div class="sum_cart_item">Price details(${inCartCount} Items): ${sum} USD</div>
    `); 

    cart.appendChild(sumHtml)

    const buttonRemove = document.querySelector('.btn_remove_cart');

    buttonRemove.addEventListener('click', () =>{
        document.querySelector('main') ? document.querySelector('main').remove() : null;
        localStorage.clear();
        const clearCart = document.createElement('main')
        const clearBlock = document.createElement('div')
        clearBlock.insertAdjacentHTML('beforeend', `
                <div class="clear_cart_text"> There is nothing in yoyr cart. Let's add some items.</div>
                <button class="add_item_btn">ADD ITEMS</button>
        `);

    clearCart.appendChild(clearBlock)
    app.insertBefore(clearCart, document.querySelector('footer'));

    });

    // const addItem = document.querySelector('.add_item_btn')
    // debugger
    // addItem.addEventListener('click', () =>{
    //     location.hash = route.name
    //     route.Catalog(products)
        
    // })
         
};









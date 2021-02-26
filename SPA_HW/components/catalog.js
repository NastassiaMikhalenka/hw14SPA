import localStorageProducts from "../localStorage.js";

export function Catalog(products){
    const productStore = localStorageProducts.getProducts();

    const app = document.querySelector('.app');
    document.querySelector('main') ? document.querySelector('main').remove() : null;
    const catalog = document.createElement('main');
    catalog.classList.add('products_container')
    products.forEach(({id, title, image, price}) => {

        catalog.insertAdjacentHTML('beforeend', `
            <div class="catalog_item">
            <p class="catalog_item_title">${title}</div> 
            <img class="catalog_item_img" width=200px src="${image}" alt="#">
            <p class="catalog_item_price">${price} USD</div>
        `);

            const button = document.createElement('button')
            button.classList.add('catalog_item_btn')
            button.innerHTML = 'ADD'
            catalog.appendChild(button)
        
            app.insertBefore(catalog, document.querySelector('footer'));
    });
    const push = document.querySelectorAll('button')
    push.forEach((item, id) => {
        const product = id+1;
        item.addEventListener('click', function() {
            localStorageProducts.putProducts(product)
            if(productStore.findIndex(n => n.id === id) === -1){
                item.classList.toggle('catalog_item_btn_active')

                if(item.classList.contains('catalog_item_btn_active')){
                    item.innerHTML= 'DELETE'
                } else{
                    item.innerHTML= 'ADD'
                }  
            }else{
                console.log('click')
            }
        });
    });
};



// {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, description: "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday", category: "men clothing", …}
// category: "men clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// __proto__: Object


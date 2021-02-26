import Contacts from './contacts.js'
import {Catalog} from './catalog.js'
import Cart from './cart.js'
import data from './api.js'

let products = [];

data().then(result => {
    products = result;
    // console.log(products)
})
        const linkRoute = [
            {name: 'Catalog', component: Catalog},
            {name: 'About', component: Contacts}, 
            {name: 'Cart', component: Cart}
        ]

        const app = document.querySelector('.app')
        const nav = document.createElement('nav')
        app.appendChild(nav);
        const linkList = document.createElement('ul')
        nav.appendChild(linkList)

        linkRoute.map(route => {
            const link = document.createElement('li')
            link.innerHTML = route.name
            linkList.appendChild(link)


            link.addEventListener('click', ()=> {
                location.hash = route.name
                route.component(products)
            });

        });

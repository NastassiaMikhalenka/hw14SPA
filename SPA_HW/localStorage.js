class LocalStorageProducts {
    constructor(){
        this.keyName = 'products'
    }

    getProducts(){
        const productsStorage = localStorage.getItem(this.keyName);
        if(productsStorage !== null){
            return JSON.parse(productsStorage);
        }
        return []
        // debugger
    }

    putProducts(id){
        let products = this.getProducts();
        const index = products.findIndex(n => n.id === id) // поиск объекта в массиве
        if(index === -1){
            products.push({id});
        }else{
            products.splice(index, 1)
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

       return {products}
    }
}

const localStorageProducts = new LocalStorageProducts();
export default localStorageProducts
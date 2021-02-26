class Main{
    create(){
        const app = document.querySelector('.app')
        const main = document.createElement('main')
        main.innerHTML= `
            <div class="main">
                Simple online shop 
            </div>
        `;
        app.appendChild(main);
    }
    init(){
        this.create();
    }
}
const main = new Main().init();
export {main};
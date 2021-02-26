class Header{
    create(){
        const app = document.querySelector('.app')
        const header = document.createElement('header')
        header.innerHTML= `
            <div class="header">
            Online Shopping for Women, Men, Kids ...
            </div>
        `;
        app.appendChild(header);
    }
    init(){
        this.create();
    }
}
const header = new Header().init();

export {header};

class App {
    constructor(){
        this.element;
    }
    create(){
        this.element = document.createElement('div');
        this.element.classList.add('app');
    }

    render(){
        document.body.appendChild(this.element);
    }
    init(){
        this.create();
        this.render();
    }
}

export default new App().init();
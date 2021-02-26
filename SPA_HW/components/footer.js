class Footer{
    create(){
        const app = document.querySelector('.app')
        const footer = document.createElement('footer')
        footer.innerHTML= `
            <div class="footer">
                <div class="footer_info">
                    <p class="footer_text">100% ORIGINAL guarantee for all products </p>
                    <p class="footer_text">Return within 30days of receiving your order</p>
                </div class="footer_info">
                    <p class="footer_text">We accept payment by e-wallet RBK Money, bank cards Visa MasterCard and American Express</p>
                </div>
        `;
        app.appendChild(footer);
    }
    init(){
        this.create();
    }
}
const footer = new Footer().init();

export {footer};







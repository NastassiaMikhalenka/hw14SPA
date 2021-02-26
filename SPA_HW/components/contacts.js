export default function () {
    const app = document.querySelector('.app');
    document.querySelector('main') ? document.querySelector('main').remove() : null;
    const contacts = document.createElement('main');
    contacts.insertAdjacentHTML('beforeend', `
        <div class="contacts">
            <div class="contacts_info">
                <p class="contacts_text"> Наименование юридического лица — ООО "Мода с доставкой".</p>
                <p class="contacts_text"> Юридический адрес — Республика Беларусь, 220034, город Минск, ул. Чапаева, дом 3, кабинет 326, блок 4.</p>
                <p class="contacts_text">Регистрационный номер, дата регистрации, регистрирующий орган — 192369058, 30.10.2014, Главное управление юстиции Мингорисполкома.</p>
            </div class="contacts_info">
                <p class="contacts_text">В торговом реестре с 14 мая 2015 года.</p>
                <p class="contacts_text">Регистрация №255425, Мингорисполком.</p>
                <p class="contacts_text">График работы Интернет-магазина — круглосуточно.</p>
            </div>
        </div>
    `);
    app.insertBefore(contacts, document.querySelector('footer'));
};

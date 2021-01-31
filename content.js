
continueButtonUpdate();
productNameBackground();
hidePaypalAndForms();
addShippingCosts();
printingCartData();

function continueButtonUpdate() {
    var continueButton = document.querySelectorAll('.gl-cta.gl-cta--primary.gl-cta--full-width');
    continueButton.forEach(element => {
        element.innerHTML = element.innerHTML.replace('Continuar', 'Comprar desde Canarias');
        element.classList.add("nikeAppearenceButton");
    });
    var leftElements = document.querySelectorAll('.nikeAppearenceButton #arrow-right-long, .nikeAppearenceButton .gl-icon.gl-cta__icon');
    leftElements.forEach(element => {
        element.classList.add("hideElement");
    });
    document.styleSheets[0].addRule(".gl-cta--primary:after", "display: none;");
    document.styleSheets[0].addRule(".gl-cta--primary:before", "display: none;");
}

function productNameBackground() {
    var nameProduct = document.querySelectorAll('[data-auto-id="glass-cart-line-item-name"]');
    nameProduct.forEach(element => {
        element.classList.add("nameBackground");
    });
}

function hidePaypalAndForms() {
    var hidingButtons = document.querySelectorAll('.gl-cta.gl-cta--secondary.gl-cta--full-width, .checkout-actions__or-separator___1V-H9, .gl-input.gl-form-item--atp-2049-asterisk-none');
    hidingButtons.forEach(element => {
        element.classList.add("hideElement");
    });
}

function addShippingCosts() {
    var shippingRow = document.createElement("div");
    shippingRow.classList.add("order-summary-section___shipping");

    var labelInShippingRow = document.createElement("span");
    labelInShippingRow.innerHTML = "Envío a Canarias";
    labelInShippingRow.classList.add("order-summary___shipping-label");
    shippingRow.appendChild(labelInShippingRow);

    var valueInShippingRow = document.createElement("span");
    valueInShippingRow.innerHTML = "€ 4.95";
    valueInShippingRow.classList.add("order-summary___shipping-value");
    shippingRow.appendChild(valueInShippingRow);

    var totalRow = document.querySelector('.order-summary-total___1z_IG');
    var ivaRow = document.querySelector('.order-summary-tax.gl-body--s');
    var newLastRow = document.createElement("div");
    newLastRow.append(shippingRow);
    newLastRow.append(totalRow);
    newLastRow.append(ivaRow);

    var shippingSpace = document.querySelector('.order-summary___3Ch5l');
    shippingSpace.append(newLastRow);

    var totalPrice = document.querySelectorAll('[data-auto-id="glass-cart-summary-price-value"], [data-auto-id="glass-cart-total-price"]');
    totalPrice.forEach(element => {
        var currentPrice = element.innerHTML;
        currentPrice = currentPrice.substring(currentPrice.indexOf(" ") + 1, currentPrice.length);
        var realPrice = parseInt(currentPrice) + 4.95;
        element.innerHTML = element.innerHTML.replace(currentPrice, realPrice);
    });
}

function printingCartData() {
    var printeableScript = [];
    var groupOfNames = document.querySelectorAll('[data-auto-id="glass-cart-line-item-name"]');
    var groupOfQuantitys = document.querySelectorAll('.gl-dropdown-custom__select-label-text');
    var groupOfPrices = document.querySelectorAll('.gl-hidden-s.gl-price .gl-price-item.notranslate:not(.gl-hidden-s.gl-price .gl-price-item.gl-price-item--crossed.notranslate)');

    for (let i = 0; i < groupOfNames.length; i++) {
        var productName = groupOfNames[i].innerHTML;
        var productQuantity = groupOfQuantitys[i].innerHTML;
        var productPrice = groupOfPrices[i].innerHTML;
        printeableScript.push({ name: productName, quantity: productQuantity, price: productPrice });
    }
    console.log(JSON.stringify(printeableScript));
}
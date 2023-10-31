document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const customerMoneyInput = document.getElementById("customer-money");
    const calculateChangeButton = document.getElementById("calculate-change");
    const changeAmountSpan = document.getElementById("change-amount");

    products.forEach(product => {
        product.addEventListener("click", function() {
            const price = parseFloat(product.getAttribute("data-price"));
            customerMoneyInput.value = price;
        });
    });

    calculateChangeButton.addEventListener("click", function() {
        const customerMoney = parseFloat(customerMoneyInput.value);
        const totalPrice = Array.from(products).reduce((sum, product) => {
            return sum + parseFloat(product.getAttribute("data-price"));
        }, 0);
        
        if (customerMoney >= totalPrice) {
            const change = customerMoney - totalPrice;
            changeAmountSpan.textContent = change.toFixed(2);
        } else {
            changeAmountSpan.textContent = "Dinheiro insuficiente";
        }
    });
});

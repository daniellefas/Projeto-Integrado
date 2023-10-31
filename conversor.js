document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convert");
    const amountInput = document.getElementById("amount");
    const coinList = document.getElementById("coinList");

    convertButton.addEventListener("click", function() {
        const amount = parseInt(amountInput.value);

        if (!isNaN(amount)) {
            coinList.innerHTML = "";

            let remainingAmount = amount;
            const coinValues = [100, 50, 25, 10, 5, 1];

            coinValues.forEach(coinValue => {
                const numberOfCoins = Math.floor(remainingAmount / coinValue);
                remainingAmount %= coinValue;

                if (numberOfCoins > 0) {
                    const coinText = `Moedas de R$ ${(coinValue / 100).toFixed(2)}: ${numberOfCoins}`;
                    const listItem = document.createElement("li");
                    listItem.textContent = coinText;
                    coinList.appendChild(listItem);
                }
            });
        } else {
            coinList.innerHTML = "Digite um valor válido em centavos.";
        }
    });
});

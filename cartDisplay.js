function displayCart() {

    const table =
        document.getElementById(
            "cart-items"
        );

    let total = 0;

    table.innerHTML = "";

    cart.forEach(item => {

        const row =
            document.createElement("tr");

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        row.innerHTML = `

            <td>${item.name}</td>

            <td>$${item.price}</td>

            <td>${item.quantity}</td>

            <td>$${itemTotal.toFixed(2)}</td>

        `;

        table.appendChild(row);

    });

    document.getElementById(
        "cart-total"
    ).innerText =
        "Total: $" +
        total.toFixed(2);

}

function clearCart() {

    cart = [];

    saveCart();

    displayCart();

}

displayCart();
function displayCart() {

    const table =
        document.getElementById(
            "cart-items"
        );

    let total = 0;

    table.innerHTML = "";

    if (cart.length === 0) {

    table.innerHTML =
        "<tr><td colspan='5'>Cart is empty</td></tr>";

    document.getElementById(
        "cart-total"
    ).innerText =
        "Total: $0.00";

    return;
}

    cart.forEach(item => {

        const row =
            document.createElement("tr");

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${itemTotal.toFixed(2)}</td>
        <td>
        <button onclick="removeItem('${item.id}')">
        🗑 Remove
        </button>
        </td>
        `;

        table.appendChild(row);

    });

    document.getElementById(
        "cart-total"
    ).innerText =
        "Total: $" +
        total.toFixed(2);

}

function removeItem(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );

    saveCart();

    displayCart();

}

function clearCart() {

    cart = [];

    saveCart();

    displayCart();

}

displayCart();
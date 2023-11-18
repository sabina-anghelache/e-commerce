document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login_btn");
    const loginDropdown = document.querySelector(".login_dropdown");
    const moreBtn = document.querySelector(".more_lan");
    const moreDropdown = document.querySelector(".more_dropdown");

    loginBtn.addEventListener("click", function() {
        loginDropdown.classList.toggle("none");
    });

    moreBtn.addEventListener("click", function() {
        moreDropdown.classList.toggle("none");
    });

    // You can add more event listeners and functionality as needed

    // Example of adding items to cart
    const addCartButtons = document.querySelectorAll(".add-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    let cartTotalAmount = 0;

    addCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productTitle = button.previousElementSibling.previousElementSibling.textContent;
            const productPrice = parseFloat(button.previousElementSibling.textContent);
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span class="item-title">${productTitle}</span>
                <span class="item-price">Lei${productPrice.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(cartItem);
            cartTotalAmount += productPrice;
            cartTotal.textContent = `Total: Lei${cartTotalAmount.toFixed(2)}`;
        });
    });

    const closeCartButton = document.querySelector(".close-cart");
    closeCartButton.addEventListener("click", function() {
        cartItemsContainer.innerHTML = "";
        cartTotalAmount = 0;
        cartTotal.textContent = "Total: Lei0.00";
    });
});

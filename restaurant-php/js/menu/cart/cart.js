// CART

// Create an editable cart array
let cart = {};

// On page load, update the cart display
window.onload = updateCartDisplay;

// Check if the cart is empty and return a bool value
function isCartEmpty() {
    return Object.keys(cart).length === 0;
}

// Update the cart display by rendering items using the createCartEntry() and update the proceed-to-checkout-button as well as the cart button number in the menu header
function updateCartDisplay() {
    updateCartCount();
}



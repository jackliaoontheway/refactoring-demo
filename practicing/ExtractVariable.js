function price(order) {
    // price is base price - quantity discount + shipping
    return order.quantity * itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * itemPrice * 0.1, 100);
}
// Refactoring ======== >>
function price(order) {
    let basePrice = order.quantity * itemPrice;
    let discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    let shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - discount + shipping;
}
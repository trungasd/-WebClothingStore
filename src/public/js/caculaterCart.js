document.addEventListener('DOMContentLoaded', function () {
    const updateButton = document.querySelector('.cart_submit button[type="submit"]');
    const checkoutButton = document.querySelector('.checkout_btn button[type="submit"]');

    updateButton.addEventListener('click', function (event) {
        event.preventDefault();
        updateCartTotals();
    });

    checkoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        updateCartTotals();
        submitForm();
    });
});

function updateCartTotals() {
    let totalCartPrice = 0;
    let totalQuantity = 0;
    const productRows = document.querySelectorAll('.cart_page tbody tr');
    productRows.forEach(function (row) {
        const salePrice = parseFloat(row.querySelector('.product-price').textContent.replace('£', '').replace('$', '')); // Loại bỏ ký hiệu tiền tệ và chuyển đổi sang số thực
        const quantity = parseInt(row.querySelector('.product_quantity input').value);
        const totalPrice = salePrice * quantity;
        row.querySelector('.product_total').textContent = '$' + totalPrice.toFixed(2); // Cập nhật giá trị tổng cho mỗi sản phẩm
        totalCartPrice += totalPrice; // Tính tổng giá trị của tất cả sản phẩm
        totalQuantity += quantity; // Tính tổng số lượng của tất cả sản phẩm
    });

    // Tính tổng giá trị vận chuyển
    const shippingCost = 25.00; // Phí vận chuyển cố định
     // Cập nhật tổng giá trị

    // Cập nhật giá trị Subtotal, Shipping và Total của giỏ hàng
    const subtotalElement = document.querySelector('.cart_subtotal .cart_amount');
    subtotalElement.textContent = '$' + totalCartPrice.toFixed(2);

    const shippingElement = document.querySelector('.cart_subtotal .shipping_amount');
    shippingElement.textContent = '$' + shippingCost.toFixed(2);

    totalCartPrice += shippingCost;
    const totalElement = document.querySelector('.cart_subtotal .total_amount');
    totalElement.textContent = '$' + totalCartPrice.toFixed(2);

    // Cập nhật giá trị total và quantity vào các input hidden
    document.querySelector('input[name="total"]').value = totalCartPrice;
    document.querySelector('input[name="quantity"]').value = totalQuantity;
    console.log(totalCartPrice);
    console.log(totalQuantity);
    

}
function submitForm() {
    const form = document.querySelector('form[action="/cart/makeorder"]');
    form.submit(); // Gửi form đi
}

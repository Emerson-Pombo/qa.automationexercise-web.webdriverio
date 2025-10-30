class HeaderComponent {
    get singUpLoginBtn() {
        return $('a[href="/login"]');
    }

    get productsBtn() {
        return $('a[href="/products"]');
    }

    get cartBtn() {
        return $('a[href="/view_cart"]');
    }
}

export default new HeaderComponent();

import BasePage from './base.page';
import Header from './header.component';

class HomePage extends BasePage {
  get header() {
    return Header;
  }

    get productsBtn() {
        return $('a[href="/products"]');
    }
}

export default new HomePage();

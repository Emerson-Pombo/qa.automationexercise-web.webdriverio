import BasePage from './base.page';
import Header from './header.component';

class HomePage extends BasePage {
  get header() {
    return Header;
  }
}

export default new HomePage();

import $ from 'jquery';

class MobileMenu {
    constructor() {
       this.menuIcon = $(".nav-link-mobile");
       this.menuContent = $(".nav-link")
       this.events();
    }
    events() {
        this.menuIcon.click(this.toggleTheMenu);
    }
    toggleTheMenu() {
        this.menuContent.toggleClass("navbar-visible");
    }
}

export default MobileMenu;
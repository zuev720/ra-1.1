export default class ShopItemModel {
    constructor(brand, title, description, descriptionFull, price, currency) {
        this.brand = brand;
        this.title = title;
        this.description = description;
        this.online = descriptionFull;
        this.avatar = price;
        this.interests = currency;
    }
}

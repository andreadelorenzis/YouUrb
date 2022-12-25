export class Food {
    constructor(
        name,
        price,
        imageUri,
        user,
        categoryIds,
        id,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUri = imageUri;
        this.categoryIds = categoryIds;
        this.user = user;
    }
}
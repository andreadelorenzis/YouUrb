export class Food {
    constructor(
        name,
        description,
        price,
        imageUri,
        user,
        categoryIds,
        id,
    ) {
        this.id = id;
        this.name = name;
        this.description = description
        this.price = price;
        this.imageUri = imageUri;
        this.categoryIds = categoryIds;
        this.user = user;
    }
}
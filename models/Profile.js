export class Profile {
    constructor(
        imageUri,
        username,
        bio,
        residence,
        avgRatings,
        reviews,
        foods,
        rides,
        id
    ) {
        this.imageUri = imageUri;
        this.username = username;
        this.bio = bio;
        this.residence = residence;
        this.avgRatings = avgRatings;
        this.reviews = reviews;
        this.foods = foods;
        this.rides = rides;
        this.id = id;
    }
}
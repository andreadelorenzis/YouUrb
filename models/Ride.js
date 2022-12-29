export class Ride {
    constructor(
        departureCity,
        destinationCity,
        departureLocation,
        date,
        hour,
        price,
        description,
        totalSeats,
        occupiedSeats,
        user,
        id,
    ) {
        this.id = id;
        this.departureCity = departureCity;
        this.destinationCity = destinationCity;
        this.departureLocation = departureLocation;
        this.date = date;
        this.hour = hour;
        this.price = price;
        this.description = description;
        this.totalSeats = totalSeats;
        this.occupiedSeats = occupiedSeats;
        this.user = user;
    }
}
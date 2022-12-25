export class Ride {
    constructor(
        departure,
        destination,
        date,
        price,
        totalSeats,
        occupiedSeats,
        user,
        id,
    ) {
        this.id = id;
        this.departure = departure;
        this.destination = destination;
        this.date = date;
        this.price = price;
        this.totalSeats = totalSeats;
        this.occupiedSeats = occupiedSeats;
        this.user = user;
    }
}
import { HotelRest } from "./hotel-rest";


export class Hotel {
    name: string;
    description: string;
    pictures: string
    noteUser: number;
    starsNotation: number;
    id:number;

    constructor(hotelRest: HotelRest){

        let str = hotelRest._links.self.href
        this.id = Number.parseInt(str.substring(str.length-1));
        this.name = hotelRest.name;
        this.description=hotelRest.description;
        this.pictures = hotelRest.pictures;
        this.noteUser = hotelRest.noteUser;
        this.starsNotation = hotelRest.starsNotation;

    }
}

export class HotelRest {
      name: string;
      description: string;
      pictures: string
      noteUser: number;
      starsNotation: number
      _links: {
          self: {
              href:string
          },
          hotel: {
              href: string
          },
          adress: {
              href: string
          },
          bedrooms: {
              href:string
          }
      }
  

}

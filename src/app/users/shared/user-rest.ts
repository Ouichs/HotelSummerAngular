import { User } from "./user";

export class UserRest {

    _embedded: {
        users: Array<User>
    }

    page: {
        number: number, size: number, totalElements: number, totalPages: number
    }
    _links: {
        self: {
            href: string
        }
    }

}

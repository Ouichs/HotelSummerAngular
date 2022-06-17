export class User {
    id!: number
    name!: string;
    firstname!: string;
    email!: string
    password!: string

    _links: {
        self: {
            href: string
        }
    }

}

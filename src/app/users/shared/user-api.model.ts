import * as _ from "lodash";

export interface RoleViewer {
    id: number
    name: string
}


export interface UserViewer {
    username: string;
    email: string
    password: string
    roles: RoleViewer[]
}

export class UserApi {
    self!: string
    self_api!: string
    value!: UserViewer
    cities!: string
    cities_api!: string

    constructor(
        responseApi
    ) {
        _.forIn(_.omit(responseApi._links, 'user'), (value, key) => {
            this[key + "_api"] = responseApi._links[key]['href']
            this[key] = this.getUri(responseApi._links[key]['href'])
        })
        this.value = _.omit(responseApi, '_links') as UserViewer
    }

    getUri(url: string) {
        return _.replace(url, "http://localhost:8080/api", "")
    }

}

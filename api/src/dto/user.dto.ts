export class UserDto{
    id : string
    name : string
    email : string
    password : string
    status: Status
}

export enum Status{
    Deleted = "Deleted",
    Created = "Created", 
    Updated = "Updated"
}
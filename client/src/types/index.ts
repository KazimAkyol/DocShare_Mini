export interface IUser {
    _id: string;
    username: string;
    email: string;
}

export interface IDocument {
    _id: string;
    filename: string;
    path: string;
    owner: IUser | string;
    sharedWith?: IUser[];
    createdAt?: string;
    updatedAt?: string;
}
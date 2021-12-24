export interface SecretCreate {
    name: string;
    secret: string;
}

export interface Secret extends SecretCreate {
    id: number;
}

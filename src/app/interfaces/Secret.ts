export interface Secret {
    id: number;
    name: string;
    secret: string;
}

export interface SecretCreate {
    name: string;
    secret: string;
}

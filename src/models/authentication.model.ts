export interface Authentication {
    token: string;
    type: string;
    email: string;
    authorities: string[];
}
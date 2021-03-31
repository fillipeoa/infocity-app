import { Cidade } from "../cidade/cidade";
import { Role } from "../role/role";

export interface Usuario {
    id: number;
    userName: String;
    password: String;
    email: String;
    cidade: Cidade;
    created_at: Date;
    updated_at: Date;
    foto: string
    role: Role;
}

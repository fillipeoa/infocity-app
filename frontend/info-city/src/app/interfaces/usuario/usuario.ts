import { Cidade } from "../cidade/cidade";
import { Role } from "../role/role";

export interface Usuario {
    id: number;
    nome: String;
    userName: String;
    passWord: String;
    email: String;
    cidade: Cidade;
    created_at: Date;
    updated_at: Date;
    role: Role;
}

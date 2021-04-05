import { Cidade } from "../cidade/cidade";
import { Usuario } from "../usuario/usuario";

export interface Colaboracao {
    id: number;
    usuario: Usuario;
    titulo: String;
    descricao: String;
    numero: number;
    rua: String;
    bairro: String;
    complemento: String;
    cidade: Cidade;
    flag_situacao: number;
    latitude: number;
    longitude: number;
    created_at: Date;
    updated_at: Date;
    avaliacao: number;
}

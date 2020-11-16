import { UsuarioAmbito } from './usuarioAmbito';

export interface Usuario {
    Id? : string;
    Email?: string;
    UserName?: string;
    usuarioAmbito : UsuarioAmbito;


}
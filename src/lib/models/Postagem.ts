import type { Tema } from "./Tema";
import type { Usuario } from "./Usuario";

export interface Postagem {
  id: number,
  titulo: string,
  texto: string,
  data: string,
  tema: Tema,
  usuario: Usuario
}
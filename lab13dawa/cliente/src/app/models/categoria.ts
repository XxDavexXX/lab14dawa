export class Categoria {
    _id?: number;
    nom_categoria: string;
    descripciön: string;

    constructor(nom_categoria: string, descripciön: string) {
        this.nom_categoria = nom_categoria;
        this.descripciön = descripciön;
    }
}

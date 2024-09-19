export enum Estado{
    INGRESADO,
    PREPARANDO,
    TERMINADO,
    ENTREGADO
}

export class Pedido{
    numero:number=0;
    nombre:string='';
    descripcion:string='';
    estado:Estado=Estado.INGRESADO;
    fecha:Date|undefined
}
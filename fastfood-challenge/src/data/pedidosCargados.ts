import { Estado, Pedido } from "../app/service/pedido";

export const PEDIDOS_LIST: Pedido[] = [
    {
        nombre:"joako",
        descripcion:"hamburguesa",
         estado:Estado.INGRESADO,
         fecha:new Date(),
         numero:1,
    },
    {
        nombre:"juan",
        descripcion:"pancho",
         estado:Estado.ENTREGADO,
         fecha:new Date(),
         numero:2,
    },
{
    nombre:"pedro",
    descripcion:"pizza",
    estado:Estado.PREPARANDO,
    fecha:new Date(),
    numero:3,},
    {
        nombre:"santi",
        descripcion:"lomo",
         estado:Estado.TERMINADO,
         fecha:new Date(),
         numero:4,
    }
     
           
]
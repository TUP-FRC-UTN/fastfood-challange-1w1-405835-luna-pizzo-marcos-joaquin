import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { PEDIDOS_LIST } from '../../data/pedidosCargados';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private lstPedidos:Pedido[]=PEDIDOS_LIST;
  

  agregar(pedido:Pedido){
    this.lstPedidos.push(pedido)
  }
  getPedidos(){
    return this.lstPedidos;
  }
  borrar(index:number){
    this.lstPedidos.splice(index,1);
  }
  actualizar(index:number,pedido:Pedido){
    this.lstPedidos[index]=pedido;
  }
}

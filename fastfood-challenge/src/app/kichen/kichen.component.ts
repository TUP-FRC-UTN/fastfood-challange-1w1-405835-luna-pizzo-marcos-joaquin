import { Component, OnInit, inject } from '@angular/core';
import { PedidosService } from '../service/pedidos.service';
import { Estado, Pedido } from '../service/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kichen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kichen.component.html',
  styleUrl: './kichen.component.css'
})
export class KichenComponent implements OnInit {
  private pedidosService = inject(PedidosService);
  pedido: Pedido = new Pedido();

  lstPedidos: Pedido[]=[];


  ngOnInit(): void {
    this.getPedidos();
  }
  
 
 getPedidos(){
   this.lstPedidos=this.pedidosService.getPedidos();
 }
  cambiarEstado(pedido:Pedido){
    if(pedido.estado==0){
      pedido.estado=Estado.PREPARANDO
    }else{pedido.estado=Estado.TERMINADO}
    
  }
  
 obtenerNombreEstado(estado: Estado): string {
  switch (estado) {
    case Estado.INGRESADO:
      return 'Ingresado';
    case Estado.PREPARANDO:
      return 'Preparando';
    case Estado.TERMINADO:
      return 'Terminado';
    case Estado.ENTREGADO:
      return 'Entregado'
    default:
      return 'Desconocido';
  }
}

}

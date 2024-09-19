import { Component, OnInit, inject } from '@angular/core';
import { PedidosService } from '../service/pedidos.service';
import { Estado, Pedido } from '../service/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnInit {
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
    pedido.estado=Estado.ENTREGADO
    
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

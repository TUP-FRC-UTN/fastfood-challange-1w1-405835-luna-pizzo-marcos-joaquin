import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PedidosService } from './service/pedidos.service';
import { Estado, Pedido } from './service/pedido';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private pedidosService = inject(PedidosService);

  ngOnInit(): void {
    this.getPedidos();
  }
  

  estadoEnum=Estado;
  title = 'fastfood-challenge'; 
  lstPedidos: Pedido[]=[];

 getPedidos(){
   this.lstPedidos=this.pedidosService.getPedidos();
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

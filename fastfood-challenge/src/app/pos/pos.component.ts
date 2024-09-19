import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidosService } from '../service/pedidos.service';
import { Estado, Pedido } from '../service/pedido';
import { randomBytes } from 'crypto';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})


export class PosComponent implements OnInit {

  private pedidosService = inject(PedidosService);
  constructor(private router: Router) {}


  ngOnInit(): void {  
  }
  
  pedido: Pedido = new Pedido();

  title = 'fastfood-challenge'; 
  lstPedidos: Pedido[]=[];
  nombre:string='';
  descripcion:string='';

enviarPedido(form:any){
  if(form.valid){
    this.pedido.nombre=this.nombre;
    this.pedido.descripcion=this.descripcion;
    this.pedido.estado=Estado.INGRESADO;
    this.pedido.fecha=new Date();
    this.pedido.numero=Math.floor(Math.random() * 1000) + 1;
    this.lstPedidos.push(this.pedido);
    this.pedidosService.agregar(this.pedido);
    console.log(this.lstPedidos);
    this.router.navigate([''])
  }
}
}

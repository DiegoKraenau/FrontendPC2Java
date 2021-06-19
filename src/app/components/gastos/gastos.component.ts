import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Gasto } from '../../models/Gasto';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  total: number = 0;
  gastos: Gasto[] = [];

  constructor(
    private gastosService: GastosService,
    private router: Router,
    public dialogo: MatDialog
  ) {
    this.total = 0;
  }

  btnClick = () => {
    this.router.navigateByUrl('/agregar');
  };

  delete = (id: any) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.gastosService.deleteGasto(id).subscribe(
          (data) => {
            console.log(data);
            this.gastos = this.gastos.filter((x) => x.outcomeId !== id);
            Swal.fire('Eliminado!', 'El pago ha sido eliminado.', 'success');
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  };

  ngOnInit(): void {
    this.gastosService.getGastos().subscribe(
      (data) => {
        this.gastos = data;
        this.gastos.forEach((gasto) => {
          this.total = this.total + gasto.amount;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

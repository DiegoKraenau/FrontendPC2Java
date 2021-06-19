import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private gastosService: GastosService, private router: Router) {
    this.total = 0;
  }

  btnClick = () => {
    this.router.navigateByUrl('/agregar');
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/models/Gasto';
import { GastosService } from 'src/app/services/gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css'],
})
export class GastoFormComponent implements OnInit {
  gasto: Gasto = {
    outcomeId: 0,
    amount: 0,
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gastosService: GastosService,
    private router: Router
  ) {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      detail: ['', Validators.required],
    });
  }

  agregar() {
    this.gasto.amount = this.form.value.amount;
    this.gasto.detail = this.form.value.detail;
    this.gastosService.postGasto(this.gasto).subscribe(
      (data) => {
        this.form.reset();
        Swal.fire('Buen trabajo!', 'Agregaste un pago!', 'success').then(
          (result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/gastos');
            }
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}

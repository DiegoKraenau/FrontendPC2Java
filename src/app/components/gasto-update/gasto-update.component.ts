import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gasto } from 'src/app/models/Gasto';
import { GastosService } from 'src/app/services/gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gasto-update',
  templateUrl: './gasto-update.component.html',
  styleUrls: ['./gasto-update.component.css'],
})
export class GastoUpdateComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      detail: ['asfasf', Validators.required],
    });
  }

  update() {
    this.gasto.amount = this.form.value.amount;
    this.gasto.detail = this.form.value.detail;
    const id: any = this.route.snapshot.paramMap.get('id');
    this.gastosService.putGasto(this.gasto).subscribe(
      (data) => {
        this.form.reset();
        Swal.fire('Buen trabajo!', 'Actualizaste un pago!', 'success').then(
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

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.gastosService.getGasto(id).subscribe(
      (data) => {
        this.gasto = data;
        this.form = this.fb.group({
          amount: [this.gasto.amount, Validators.required],
          detail: [this.gasto.detail, Validators.required],
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

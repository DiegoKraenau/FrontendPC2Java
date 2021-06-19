import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { GastoUpdateComponent } from './components/gasto-update/gasto-update.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  { path: 'gastos', component: GastosComponent },
  { path: 'agregar', component: GastoFormComponent },
  { path: 'gasto/:id/update', component: GastoUpdateComponent },
  { path: '', component: GastosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

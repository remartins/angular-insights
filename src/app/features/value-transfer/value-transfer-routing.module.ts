import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyAccountComponent } from './pages/agency-account/agency-account.component';
import { ChoiceValueComponent } from './pages/choice-value/choice-value.component';
import { ConfirmTransferComponent } from './pages/confirm-transfer/confirm-transfer.component';
import { TransferCompletedComponent } from './pages/transfer-completed/transfer-completed.component';
import { ValueTransferComponent } from './value-transfer.component';

const routes: Routes = [
  {
    path: 'value-transfer',
    component: ValueTransferComponent,
    children: [
      { path: 'agency-account', component: AgencyAccountComponent },
      { path: 'choice-value', component: ChoiceValueComponent },
      { path: 'confirm-transfer', component: ConfirmTransferComponent },
      { path: 'transfer-completed', component: TransferCompletedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValueTransferRoutingModule {}

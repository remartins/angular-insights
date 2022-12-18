import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { AgencyAccountComponent } from './pages/agency-account/agency-account.component';
import { ChoiceValueComponent } from './pages/choice-value/choice-value.component';
import { ConfirmTransferComponent } from './pages/confirm-transfer/confirm-transfer.component';
import { TransferCompletedComponent } from './pages/transfer-completed/transfer-completed.component';
import { ValueTransferRoutingModule } from './value-transfer-routing.module';
import { ValueTransferComponent } from './value-transfer.component';

@NgModule({
  declarations: [
    ValueTransferComponent,
    AgencyAccountComponent,
    ChoiceValueComponent,
    ConfirmTransferComponent,
    TransferCompletedComponent,
  ],
  imports: [
    ValueTransferRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [],
})
export class ValueTransferModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-transfer',
  templateUrl: './confirm-transfer.component.html',
  styleUrls: ['./confirm-transfer.component.scss'],
})
export class ConfirmTransferComponent implements OnInit {
  form!: FormGroup;

  private journeyData: { agency?: string; account?: string; amount?: string } =
    {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.journeyData = window.history.state;

    this.form = this.fb.group({
      agency: [this.journeyData.agency],
      account: [this.journeyData.account],
      amount: [this.journeyData.amount],
    });
  }

  confirm() {
    this.router.navigate(['../transfer-completed'], {
      relativeTo: this.route,
      state: { ...this.form.value, ...this.journeyData },
    });
  }

  back() {
    this.router.navigate(['../choice-value'], { relativeTo: this.route });
  }
}

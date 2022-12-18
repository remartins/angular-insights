import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-completed',
  templateUrl: './transfer-completed.component.html',
  styleUrls: ['./transfer-completed.component.scss'],
})
export class TransferCompletedComponent implements OnInit {
  form!: FormGroup;

  private journeyData: { agency?: string; account?: string; amount?: string } =
  {};

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.journeyData = window.history.state;

    this.form = this.fb.group({
      agency: [this.journeyData.agency],
      account: [this.journeyData.account],
      amount: [this.journeyData.amount],
    });
  }

  ok() {
    this.router.navigate(['home']);
  }
}

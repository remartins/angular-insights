import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choice-value',
  templateUrl: './choice-value.component.html',
  styleUrls: ['./choice-value.component.scss'],
})
export class ChoiceValueComponent implements OnInit {
  form!: FormGroup;

  private journeyData: { agency?: string; account?: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.journeyData = window.history.state;

    this.form = this.fb.group({
      amount: ['', Validators.required],
    });
  }

  next() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.router.navigate(['../confirm-transfer'], {
        relativeTo: this.route,
        state: { ...this.form.value, ...this.journeyData },
      });
    }
  }

  back() {
    this.router.navigate(['../agency-account'], { relativeTo: this.route });
  }
}

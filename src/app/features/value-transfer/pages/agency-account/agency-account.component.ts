import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agency-account',
  templateUrl: './agency-account.component.html',
  styleUrls: ['./agency-account.component.scss'],
})
export class AgencyAccountComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      agency: ['', Validators.required],
      account: ['', Validators.required],
    });
  }

  next() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.router.navigate(['../choice-value'], { relativeTo: this.route, state: this.form.value });
    }
  }

  back() {
    this.router.navigate(['home']);
  }
}

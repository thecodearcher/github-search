import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  goToSearchPage(): void {
    this.searchForm.markAllAsTouched();

    const { query } = this.searchForm.value;

    this.router.navigate(['./search-result'], { queryParams: { query } });

  }

  private initializeForm(): void {
    this.searchForm = this.fb.group({
      query: [null, Validators.required]
    });
  }

}

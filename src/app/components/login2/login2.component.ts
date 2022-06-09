import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  error = '';
  returnUrl!: string;

  year: number = new Date().getFullYear();

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(f: NgForm) {
    console.log(f.value, f.valid);
    this.submitted = true;

    if (!f.valid) {
      return;
    }
    else {
      this.auth.login(f.value.email, f.value.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/dashboard']);
          },
          error => {
            this.error = error ? error : '';
          });
          
    }
  }

}

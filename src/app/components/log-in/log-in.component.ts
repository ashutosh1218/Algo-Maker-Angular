import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { first } from 'rxjs/operators';
import { FunctionsService } from 'src/app/core/functions.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl = '';
  public valid = false;

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService, private func:FunctionsService) { }

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

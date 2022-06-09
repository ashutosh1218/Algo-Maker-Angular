import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  submitted = false;
  error = '';
  returnUrl = '';
  
  year: number = new Date().getFullYear();
  
  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    this.submitted = true;
    if (!f.valid) {
      return;
    }
    else {
      this.auth.register(f.value.name, f.value.email, f.value.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/login']);
          },
          error => {
            this.error = error ? error : '';
          });
    }

  }

}

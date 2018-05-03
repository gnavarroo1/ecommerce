import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  loginSubs: Subscription;
  returnUrl: string;
  // isLoggedIn: boolean;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const values = this.signInForm.value;
    const keys = Object.keys(values);
    console.log(keys);
    if (this.signInForm.valid) {
      this.loginSubs = this.authService.loginUser(values.email,values.password).subscribe(data => {
        const error = data.status;
        const msg = data.message;
        if (error!== 200) {
          keys.forEach(val => {
            this.pushErrorFor(val, msg[val]);
          });
        }else{
          // this.isLoggedIn = true;
          this.router.navigate([this.returnUrl]);
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.signInForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }
  private pushErrorFor(ctrl_name: string, msg: string) {
    this.signInForm.controls[ctrl_name].setErrors({'msg': msg});
  }
  initForm() {
    const email = '';
    const password = '';

    this.signInForm = this.fb.group({
      'email': [email, Validators.required],
      'password': [password, Validators.required]
    });
  }
  redirectIfUserLoggedIn() {    
    this.authService.currentStatus.subscribe(data=>{
      if(data === true) { this.router.navigateByUrl('/'); }
    }
    );
  }
  ngOnDestroy() {
    if (this.loginSubs) { this.loginSubs.unsubscribe(); }
  }
}

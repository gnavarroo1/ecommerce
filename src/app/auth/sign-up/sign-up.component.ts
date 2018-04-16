import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// import { environment } from '../../../../environments/environment';
import {
  Store
} from '@ngrx/store';
// import { AppState } from '../../../interfaces';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  UserService
} from '../../core/services/user.service';
import {
  AuthService
} from '../../core/services/auth.service';
// import { getAuthStatus } from '../../reducers/selectors';
import {
  Subscription
} from 'rxjs/Subscription';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  formSubmit = false;
  // title = environment.AppName;
  registerSubs: Subscription;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    // private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const values = this.signUpForm.value;
    const keys = Object.keys(values);
    this.formSubmit = true;
    if (this.signUpForm.valid) {
      this.registerSubs = this.userService.create(values).subscribe(data => {
        const errors = data.message;

        if (data.status !== 200) {
          keys.forEach(val => {
            if (errors[val]) {
              this.pushErrorFor(val, errors[val][0]);
            };
          });
        } else {
          this.authService.loginUser(values.email, values.password).subscribe(data => {
            const error = data.status;
            const msg = data.message;
            if (error !== 200) {
              keys.forEach(val => {
                this.pushErrorFor(val, msg);
              });
            } else {
              // this.isLoggedIn = true;
              this.router.navigate([this.returnUrl]);

            }
          });
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.signUpForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.signUpForm.controls[ctrl_name].setErrors({
      'msg': msg
    });
  }

  initForm() {
    const email = '';
    const password = '';
    const password_confirmation = '';
    const dni = '';
    const nombre = '';
    const apellidos = '';
    const pais = '';
    // const mobile = '';
    // const gender = '';

    this.signUpForm = this.fb.group({
      'email': [email, Validators.compose([Validators.required, Validators.email])],
      'nombre': [nombre, Validators.compose([Validators.required, Validators.pattern('[A-Za-z\s]+')])],
      'apellidos': [apellidos, Validators.compose([Validators.required, Validators.pattern('[A-Za-z\s]+')])],
      'password': [password, Validators.compose([Validators.required, Validators.minLength(6)])],
      'password_confirmation': [password_confirmation, Validators.compose([Validators.required, Validators.minLength(6)])],
      'dni': [dni, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]{8}')])]
      // 'pais':[pais,Validators.compose([Validators.required, Validators.pattern('[A-Za-z\s]+')])],
    }, {
      validator: this.matchingPasswords('password', 'password_confirmation')
    });
  }

  redirectIfUserLoggedIn() {

  }

  ngOnDestroy() {
    if (this.registerSubs) {
      this.registerSubs.unsubscribe();
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {
      [key: string]: any
    } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }



}

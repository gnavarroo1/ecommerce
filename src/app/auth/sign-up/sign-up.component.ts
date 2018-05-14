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
  registerSubs: Subscription;
  returnUrl: string;
  tipousuarios = {
    natural: 1,
    juridico: 2
  }
  selectedTipoUsuario: any;
  errTipoUsuarioLen: number;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.redirectIfUserLoggedIn();
    this.errTipoUsuarioLen = 8;
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
    const nrodocumento = '';
    const nombre = '';
    const tipousuario = ''
    this.signUpForm = this.fb.group({
      'email': [email, Validators.compose([Validators.required, Validators.email])],
      'nombre': [nombre, Validators.compose([Validators.required, Validators.pattern('[A-Za-z\s]+')])],
      'password': [password, Validators.compose([Validators.required, Validators.minLength(6)])],
      'password_confirmation': [password_confirmation, Validators.compose([Validators.required, Validators.minLength(6)])],
      'nrodocumento': [nrodocumento, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]{8}')])],
      'tipousuario': [tipousuario, Validators.required]
    }, {
      validator: this.matchingPasswords('password', 'password_confirmation')
    });
  }

  redirectIfUserLoggedIn() {
    if (localStorage.getItem["currentUser"]) {
      this.router.navigate([this.returnUrl]);
    }
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
  errTipoDocumento() {
    if (this.selectedTipoUsuario == 1) {
      this.errTipoUsuarioLen = 8;
      this.signUpForm.controls['nrodocumento'].clearValidators();
      this.signUpForm.controls['nrodocumento'].setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]{8}')])
    } else {
      this.errTipoUsuarioLen = 11;
      this.signUpForm.controls['nrodocumento'].clearValidators();
      this.signUpForm.controls['nrodocumento'].setValidators([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[0-9]{11}')])
    }
  }

  esTipoDni() {
    if (this.errTipoUsuarioLen === 8)
      return true;
    return false
  }
}

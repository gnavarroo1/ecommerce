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
} from '../../../core/services/user.service';
import {
  ProductService
} from '../../../core/services/product.service';

import {
  Subscription
} from 'rxjs/Subscription';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  addProductForm: FormGroup;
  formSubmit = false;
  registerSubs: Subscription;
  returnUrl: string;
  categories = [];
  selectedCategory:any;
  currentuser: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private productService: ProductService) {}
  ngOnInit(): void {
    this.initForm();
    this.productService.currentCategories.subscribe(categoryList => this.categories = categoryList);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
      const values = this.addProductForm.value;
      values.categoryId = this.selectedCategory;
      console.log(localStorage['currentUser']);
      values.userId = JSON.parse(localStorage.getItem('currentUser')).id;
      console.log(values.userId);
      const keys = Object.keys(values);
      this.formSubmit = true;
      if (this.addProductForm.valid) {
        this.registerSubs = this.productService.addProduct(values).subscribe(data => {
          const errors = data.message;
          if (data.status !== 200) {
            keys.forEach(val => {
              if (errors[val]) {
                this.pushErrorFor(val, errors[val][0]);
              };
            });
          } else {
            this.router.navigate([this.returnUrl]);
          }
        });
      } else {
        keys.forEach(val => {
          const ctrl = this.addProductForm.controls[val];
          if (!ctrl.valid) {
            this.pushErrorFor(val, null);
            ctrl.markAsTouched();
          };
        });
      }

  }

  initForm() {
      const nombre = '';
      const description = '';
      var qty:number;
      var price:number;
      const userId =JSON.parse(localStorage.getItem('currentUser')).id;
      console.log(userId);
      this.addProductForm = this.fb.group({
        'nombre': [nombre, Validators.compose([Validators.required, Validators.pattern('[A-Za-z\s]+')])],
        'description': [description, Validators.compose([Validators.required])],
        'qty': [qty,Validators.compose([Validators.required,Validators.min(0),Validators.minLength(1),Validators.pattern('[0-9]+')])],
        'price': [price,Validators.compose([Validators.required,Validators.min(0),Validators.pattern('^\\d+\\.\\d{1,2}$')])],
      });
    
  }

  ngOnDestroy() {
    if (this.registerSubs) {
      this.registerSubs.unsubscribe();
    }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.addProductForm.controls[ctrl_name].setErrors({
      'msg': msg
    });
  }
}

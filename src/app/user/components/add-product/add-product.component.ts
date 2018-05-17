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
import {
  SharedService
} from '../../../core/services/shared.service';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  addProductForm: FormGroup;
  formSubmit = false;
  imageSubs: Subscription;
  registerSubs: Subscription;
  returnUrl: string;
  categories = [];
  selectedCategory: any;
  currentuser: any;
  imagen: File = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private sharedService: SharedService,
    private productService: ProductService) {
      this.productService.getAllCategories().subscribe(res => {
      });;
    }
  ngOnInit(): void {
    this.initForm();
    this.productService.currentCategories.subscribe(categoryList => this.categories = categoryList);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const values = this.addProductForm.value;
    values.categoryId = this.selectedCategory;
    values.userId = JSON.parse(localStorage.getItem('currentUser')).id;
    values.image = this.imagen;
    const keys = Object.keys(values);
    this.formSubmit = true;
    if (this.addProductForm.valid) {
      this.imageSubs = this.sharedService.uploadImage(values.image).subscribe(data => {
          const errors = data.message;
          if (data.status !== 200) {
            console.log(errors);
          } else {
            values.image = data.filePath+data.fileName;
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
          }
        });
      }
      else {
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
      var cantidad: number;
      var price: number;
      const userId = JSON.parse(localStorage.getItem('currentUser')).id;
      this.addProductForm = this.fb.group({
        'nombre': [nombre, Validators.compose([Validators.required, Validators.pattern('[A-Za-z\s]+')])],
        'description': [description, Validators.compose([Validators.required])],
        'cantidad': [cantidad, Validators.compose([Validators.required, Validators.min(0), Validators.minLength(1), Validators.pattern('[0-9]+')])],
        'price': [price, Validators.compose([Validators.required, Validators.min(0), Validators.pattern('^([0-9])+(\.[0-9]{1,2})?$')])],
      });

    }

    ngOnDestroy() {
      if (this.registerSubs) {
        this.registerSubs.unsubscribe();
      }
      if (this.imageSubs) {
        this.imageSubs.unsubscribe();
      }
    }

    handleFileInput(files: FileList) {
      this.imagen = files.item(0);
    }

    private pushErrorFor(ctrl_name: string, msg: string) {
      this.addProductForm.controls[ctrl_name].setErrors({
        'msg': msg
      });
    }
  }

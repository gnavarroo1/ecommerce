


import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsOfferComponent } from './components/products-offer/products-offer.component';

import { UserComponent } from './user.component';

export const UserRoutes =[
    // {
        // path:'',
        // component: UserComponent,
        // children:[
        //     {
        //         path:'',redirecTo:'add-product'
        //     },
            { path:'add-product', component: AddProductComponent},
            { path:'products-offer', component: ProductsOfferComponent}
        // ]
    // }
];
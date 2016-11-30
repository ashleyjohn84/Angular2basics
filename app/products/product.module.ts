import { NgModule } from '@angular/core'
import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import {ProductDetailGuard} from './product-guard.service'
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common';
import {ProductService} from './product.service'


@NgModule({
  declarations:[ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
              {path:'products',component: ProductListComponent },
              { path:'product/:id',
                canActivate:[ProductDetailGuard],
                component: ProductDetailComponent }
            ]),
    ],
    providers:[
        ProductDetailGuard,
        ProductService
    ]

})
export class ProductModule{

}
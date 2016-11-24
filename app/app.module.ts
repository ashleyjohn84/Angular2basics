import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [ BrowserModule,
            FormsModule,
            RouterModule.forRoot([
              {path:'products',component: ProductListComponent },
              {path:'product/:id',component: ProductDetailComponent },
              {path:'welcome',component: WelcomeComponent },
              {path:'',redirectTo:'welcome',pathMatch: 'full' },
              {path:'**',redirectTo:'welcome',pathMatch: 'full' }
            ]),
            HttpModule],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

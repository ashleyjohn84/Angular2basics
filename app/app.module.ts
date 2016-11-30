import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {ProductModule} from './products/product.module'

@NgModule({
  imports: [ BrowserModule,
            RouterModule.forRoot([
              {path:'welcome',component: WelcomeComponent },
              {path:'',redirectTo:'welcome',pathMatch: 'full' },
              {path:'**',redirectTo:'welcome',pathMatch: 'full' }
            ]),
            HttpModule,
            ProductModule],
  declarations: [ 
    AppComponent,
   WelcomeComponent,
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

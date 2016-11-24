import {Component} from '@angular/core';
import {ProductService} from './products/product.service'
@Component({
    selector :'pm-app',
    template : `<div>
    <h1>{{pageTitle}}</h1>
    <div><pm-products></pm-products></div>
    </div>`
    ,
    providers:[ProductService]
})

export class AppComponent{
    pageTitle : string ='My product Management';
}
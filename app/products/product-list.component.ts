import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service'



@Component({
    moduleId : module.id,
    templateUrl: 'product-list.component.html',
    styleUrls :['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle : string = 'Product List';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    listFilter : string;
    errorMessage:string;
    products     : IProduct[] =null;

private _productService : ProductService
constructor(productService : ProductService){
    this._productService = productService;
}

toggleImage():void{
    this.showImage = !this.showImage;
}
ngOnInit():void{
    console.log("Inside OnInit");
    this._productService.getProducts()
    .subscribe(products => this.products = products,
    error => this.errorMessage = error);
}

onNotify(message:string):void{
    this.pageTitle =`Product List: ${message}`;
}

}
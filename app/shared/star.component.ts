import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'ai-star',
    moduleId : module.id,
    templateUrl:'star.component.html',
    styleUrls :['star.component.css']

})
export class StarComponent implements OnChanges{
   @Input() rating:number = 4;
    starWidth:number

    ngOnChanges():void {
        this.starWidth = this.rating * 86/5;
    }
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();

    onClick(){
        this.notify.emit(`the rating ${this.rating} is clicked`);
    }
}
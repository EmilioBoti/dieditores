import { Component, OnInit, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "testing",
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.css"],
})
export class TestComponent  implements OnInit{
    @Output() getChild = new EventEmitter<any>()
    
    public child: any
    
    constructor() {
        this.child = {
            name: "luis"
        }
    }
    ngOnInit(){

    }
    showName(e: any){
        console.log(e.view)
        this.getChild.emit(this.child)
    }
}
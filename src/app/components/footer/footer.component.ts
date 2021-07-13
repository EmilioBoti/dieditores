import { Component } from "@angular/core"


@Component({
    selector: "footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent{
    public title: string

    constructor(){
        this.title = "This is the Footer"
    }
}
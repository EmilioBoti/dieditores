import {Component, ViewChild, OnInit, ElementRef, AfterViewInit } from "@angular/core"
import { PostComponent } from "../postIg/post.component"


@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild("child") public child!: ElementRef

    public say: string = "ok"

    constructor(){

    }
    ngOnInit(){
        
    }
    ngAfterViewInit(){

    
    }
    getObject(e:any){
        console.log(e)
    }
}
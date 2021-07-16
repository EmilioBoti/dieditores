import {Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked  } from "@angular/core"
import { PostComponent } from "../postIg/post.component"


@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked{
    @ViewChild(PostComponent) public post!: PostComponent

    public say: string = "ok"


    ngOnInit(){

    }
    ngAfterViewInit(){
        console.log(this.post)
        // this.post.__ngContext
    }
    ngAfterViewChecked(){
        
    }
}
import { Component,ViewChild, Renderer2 ,OnInit, ElementRef, Input } from "@angular/core"

@Component({
    selector: "postIg",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"]
})

export class PostComponent implements OnInit{
    // @ViewChild('post', {static: false}) post: ElementRef;
    @Input() saying: string = ""
    public images: any[]
    public flag: boolean

    constructor(){
        this.flag = false
        this.images = [
            " https://emilioboti.github.io/assets/DiEditoresIMG/post1.jpg",
            " https://emilioboti.github.io/assets/DiEditoresIMG/post2.jpg",
            "../../../assets/DiEditoresIMG/post3.jpg",
            "../../../assets/DiEditoresIMG/post4.jpg",
            "../../../assets/DiEditoresIMG/post5.jpg",
        ]
    }

    ngOnInit(){
    }

    hover(e:any){
        this.flag = true
        console.log(e.target.id)
    }
}

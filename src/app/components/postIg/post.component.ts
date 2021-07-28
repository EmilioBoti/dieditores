import { Component,OnInit,Input } from "@angular/core"

import { ModelService } from "../../service/modelService.service"

@Component({
    selector: "postIg",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"],
    providers: [ModelService]
})

export class PostComponent implements OnInit{
    @Input() saying: string = ""
    public images: string[] = []
    public flag: boolean

    constructor(private _modelService: ModelService){
        this.flag = false
    }

    ngOnInit(){
        this._modelService.getPost().subscribe(
            (res)=>{
                this.images = res[0].postUrl
            },
            (error)=>{
                console.error(<any>error)
            })
    }
}

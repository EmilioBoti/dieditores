import { Component, OnInit } from "@angular/core"

//services
import { ModelService } from "../../service/modelService.service"
//models
import { ModelMember } from "../../models/ModelMember"

@Component({
    selector: "member",
    templateUrl: "./member.component.html",
    styleUrls: ["./member.component.css"],
    providers: [ModelService]
})
export class MemberComponent implements OnInit{
    public collectionMember: ModelMember[] = []

    constructor(private _memberService: ModelService){  
    }

    ngOnInit(){
        this._memberService.getUser().subscribe(
            (response)=>{
                console.log(response)
                this.collectionMember = response
            },
            (error)=>{
                console.error(<any>error)
            })
    }
}

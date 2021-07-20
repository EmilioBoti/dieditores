import { Component, OnInit } from "@angular/core"

//models
import { ModelMember } from "../../models/ModelMember"

@Component({
    selector: "member",
    templateUrl: "./member.component.html",
    styleUrls: ["./member.component.css"]
})
export class MemberComponent implements OnInit{
    public collectionMember: ModelMember[] = []

    constructor(){
        this.collectionMember.push(new ModelMember("Hermis","Alberto","Rodríguez","Botier", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat mattis laoreet ut 
            eu, nam morbi. Donec fusce mauris diam fames natoque turpis non. 
            Sollicitudin varius sapien, dolor, senectus nulla adipiscing. Turpis fringilla urna, 
            morbi aliquet est tellus, scelerisque.Donec fusce mauris diam fames natoque turpis non. 
            Sollicitudin varius sapien, dolor, senectus nulla adipiscing. Turpis fringilla urna, 
            morbi aliquet est tellus, scelerisque.`," assets/DiEditoresIMG/h.jpg" ))
        this.collectionMember.push(new ModelMember("María","Carla","Pirón","Chaparro", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat mattis laoreet ut 
            eu, nam morbi. Donec fusce mauris diam fames natoque turpis non. 
            Sollicitudin varius sapien, dolor, senectus nulla adipiscing. Turpis fringilla urna, 
            morbi aliquet est tellus, scelerisque.Donec fusce mauris diam fames natoque turpis non. 
            Sollicitudin varius sapien, dolor, senectus nulla adipiscing. Turpis fringilla urna, 
            morbi aliquet est tellus, scelerisque.`,
            "assets/DiEditoresIMG/m.jpg"))
    }

    ngOnInit(){

    }
}

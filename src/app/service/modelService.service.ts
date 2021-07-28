import {Injectable } from "@angular/core"
import {HttpClient, HttpHeaders  } from "@angular/common/http"
import { Observable } from "rxjs"

import { ModelMember } from "../models/ModelMember"

@Injectable()
export class ModelService {

    public url: string
    
    constructor(private _http: HttpClient) {
       this.url = "assets/data.json"
    }

    getPost(): Observable<any>{
        //this.getPostUrl()
        return this._http.get("assets/post.json")
    }
    getUser(): Observable<any>{
        return this._http.get(this.url)
    }
    // async getuser(){
    //     await fetch("assets/data.json")
    //         .then((data)=> data.json())
    //         .then((d)=>{
    //             d.forEach((e:any) => {
    //                 this.collectionMember.push(new ModelMember(e.firstName, e.secondName, e.firstLastname, e.secondLastname, e.description, e.image))
    //             });
    //         })
    // }

    // async getPostUrl(){
    //     await fetch("assets/post.json")
    //         .then((data)=> data.json())
    //         .then((d)=>{
    //             d[0].postUrl.forEach((e:any) => {
    //                 this.collectUrl.push(e)
    //             });
                
    //         })
    // }

}
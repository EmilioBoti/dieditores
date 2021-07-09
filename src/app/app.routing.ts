import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"


import {  MemberComponent } from "./members/member.component"

const appRouters: Routes = [
    //componet
    {path: "/", component: MemberComponent}
]


export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRouters)
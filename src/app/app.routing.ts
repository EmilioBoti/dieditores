import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"


import { HomeComponent } from "./components/home/home.component"
import { MemberComponent } from "./components/members/member.component"
import { ProjectComponent } from "./components/projects/project.component"

const appRouters: Routes = [
    //componet
    {path: "", component: HomeComponent},
    {path: "members", component: MemberComponent},
    {path: "projects", component: ProjectComponent}
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRouters)
import { RouterModule,Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";


const routing : Routes = [
  { path : '', component : HomeComponent},
]

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routing)
export default AppRoutes;
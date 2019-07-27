import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LizzoConcertsComponent } from "./lizzo-concerts/lizzo-concerts.component";
import { LizzoSocialComponent } from "./lizzo-social/lizzo-social.component";

const routes: Routes = [
  { path: "lizzo-social", component: LizzoSocialComponent },
  { path: "lizzo-concerts", component: LizzoConcertsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

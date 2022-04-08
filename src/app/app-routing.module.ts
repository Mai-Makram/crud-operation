import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './views/add-page/add-page.component';
import { SinglePageComponent } from './views/single-page/single-page.component';
import { UpdatePageComponent } from './views/update-page/update-page.component';
//import { SinglePageComponent } from './views/single-page/single-page.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path:'', component:UsersComponent},
  {path:'users/:id', component :SinglePageComponent},
  {path:'addPage', component: AddPageComponent},
  {path:'users/updatePage/:id', component:UpdatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

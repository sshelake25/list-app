import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { InfromationComponent } from './infromation/infromation.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'info', component: InfromationComponent },
  { path: 'list', component: ListUserComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

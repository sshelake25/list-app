import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ForComponent } from './for/for.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { InfromationComponent } from './infromation/infromation.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      title: 'Heroes List',
      color: 'Green'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Heroes List',
      color: 'Green'
    }
  },

  { path: 'info', component: InfromationComponent },
  { path: 'list', component: ListUserComponent },
  { path: 'user', component: UserComponent },
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: 'template-forms', component: TemplateFormComponent },
  { path: 'for', component: ForComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
